import { Component, EventEmitter, Input, Output } from '@angular/core';
import { asapScheduler, Observable, of, timer } from 'rxjs';
import { catchError, observeOn, switchMap, takeUntil, tap } from 'rxjs/operators';
import { FILE_NOT_FOUND_ID, FETCHING_ERROR_ID } from 'app/documents/document.service';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/logger.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "app/shared/toc.service";
import * as i4 from "app/custom-elements/elements-loader";
// Constants
export const NO_ANIMATIONS = 'no-animations';
// Initialization prevents flicker once pre-rendering is on
const initialDocViewerElement = document.querySelector('aio-doc-viewer');
const initialDocViewerContent = initialDocViewerElement ? initialDocViewerElement.innerHTML : '';
export class DocViewerComponent {
    constructor(elementRef, logger, titleService, metaService, tocService, elementsLoader) {
        this.logger = logger;
        this.titleService = titleService;
        this.metaService = metaService;
        this.tocService = tocService;
        this.elementsLoader = elementsLoader;
        this.void$ = of(undefined);
        this.onDestroy$ = new EventEmitter();
        this.docContents$ = new EventEmitter();
        this.currViewContainer = document.createElement('div');
        this.nextViewContainer = document.createElement('div');
        // The new document is ready to be inserted into the viewer.
        // (Embedded components have been loaded and instantiated, if necessary.)
        this.docReady = new EventEmitter();
        // The previous document has been removed from the viewer.
        // (The leaving animation (if any) has been completed and the node has been removed from the DOM.)
        this.docRemoved = new EventEmitter();
        // The new document has been inserted into the viewer.
        // (The node has been inserted into the DOM, but the entering animation may still be in progress.)
        this.docInserted = new EventEmitter();
        // The new document has been fully rendered into the viewer.
        // (The entering animation has been completed.)
        this.docRendered = new EventEmitter();
        this.hostElement = elementRef.nativeElement;
        // Security: the initialDocViewerContent comes from the prerendered DOM and is considered to be secure
        this.hostElement.innerHTML = initialDocViewerContent;
        if (this.hostElement.firstElementChild) {
            this.currViewContainer = this.hostElement.firstElementChild;
        }
        this.docContents$
            .pipe(observeOn(asapScheduler), switchMap(newDoc => this.render(newDoc)), takeUntil(this.onDestroy$))
            .subscribe();
    }
    set doc(newDoc) {
        // Ignore `undefined` values that could happen if the host component
        // does not initially specify a value for the `doc` input.
        if (newDoc) {
            this.docContents$.emit(newDoc);
        }
    }
    ngOnDestroy() {
        this.onDestroy$.emit();
    }
    /**
     * Prepare for setting the window title and ToC.
     * Return a function to actually set them.
     */
    prepareTitleAndToc(targetElem, docId) {
        const titleEl = targetElem.querySelector('h1');
        const needsToc = !!titleEl && !/no-?toc/i.test(titleEl.className);
        const embeddedToc = targetElem.querySelector('aio-toc.embedded');
        if (needsToc && !embeddedToc) {
            // Add an embedded ToC if it's needed and there isn't one in the content already.
            titleEl.insertAdjacentHTML('afterend', '<aio-toc class="embedded"></aio-toc>');
        }
        else if (!needsToc && embeddedToc && embeddedToc.parentNode !== null) {
            // Remove the embedded Toc if it's there and not needed.
            // We cannot use ChildNode.remove() because of IE11
            embeddedToc.parentNode.removeChild(embeddedToc);
        }
        return () => {
            this.tocService.reset();
            let title = '';
            // Only create ToC for docs with an `<h1>` heading.
            // If you don't want a ToC, add "no-toc" class to `<h1>`.
            if (titleEl) {
                title = (typeof titleEl.innerText === 'string') ? titleEl.innerText : titleEl.textContent;
                if (needsToc) {
                    this.tocService.genToc(targetElem, docId);
                }
            }
            this.titleService.setTitle(title ? `Angular - ${title}` : 'Angular');
        };
    }
    /**
     * Add doc content to host element and build it out with embedded components.
     */
    render(doc) {
        let addTitleAndToc;
        this.setNoIndex(doc.id === FILE_NOT_FOUND_ID || doc.id === FETCHING_ERROR_ID);
        return this.void$.pipe(
        // Security: `doc.contents` is always authored by the documentation team
        //           and is considered to be safe.
        tap(() => this.nextViewContainer.innerHTML = doc.contents || ''), tap(() => addTitleAndToc = this.prepareTitleAndToc(this.nextViewContainer, doc.id)), switchMap(() => this.elementsLoader.loadContainedCustomElements(this.nextViewContainer)), tap(() => this.docReady.emit()), switchMap(() => this.swapViews(addTitleAndToc)), tap(() => this.docRendered.emit()), catchError(err => {
            const errorMessage = (err instanceof Error) ? err.stack : err;
            this.logger.error(new Error(`[DocViewer] Error preparing document '${doc.id}': ${errorMessage}`));
            this.nextViewContainer.innerHTML = '';
            this.setNoIndex(true);
            return this.void$;
        }));
    }
    /**
     * Tell search engine crawlers whether to index this page
     */
    setNoIndex(val) {
        if (val) {
            this.metaService.addTag({ name: 'robots', content: 'noindex' });
        }
        else {
            this.metaService.removeTag('name="robots"');
        }
    }
    /**
     * Swap the views, removing `currViewContainer` and inserting `nextViewContainer`.
     * (At this point all content should be ready, including having loaded and instantiated embedded
     *  components.)
     *
     * Optionally, run a callback as soon as `nextViewContainer` has been inserted, but before the
     * entering animation has been completed. This is useful for work that needs to be done as soon as
     * the element has been attached to the DOM.
     */
    swapViews(onInsertedCb = () => { }) {
        const raf$ = new Observable(subscriber => {
            const rafId = requestAnimationFrame(() => {
                subscriber.next();
                subscriber.complete();
            });
            return () => cancelAnimationFrame(rafId);
        });
        // Get the actual transition duration (taking global styles into account).
        // According to the [CSSOM spec](https://drafts.csswg.org/cssom/#serializing-css-values),
        // `time` values should be returned in seconds.
        const getActualDuration = (elem) => {
            const cssValue = getComputedStyle(elem).transitionDuration || '';
            const seconds = Number(cssValue.replace(/s$/, ''));
            return 1000 * seconds;
        };
        const animateProp = (elem, prop, from, to, duration = 200) => {
            const animationsDisabled = !DocViewerComponent.animationsEnabled
                || this.hostElement.classList.contains(NO_ANIMATIONS);
            if (prop === 'length' || prop === 'parentRule') {
                // We cannot animate length or parentRule properties because they are readonly
                return this.void$;
            }
            elem.style.transition = '';
            return animationsDisabled
                ? this.void$.pipe(tap(() => elem.style[prop] = to))
                : this.void$.pipe(
                // In order to ensure that the `from` value will be applied immediately (i.e.
                // without transition) and that the `to` value will be affected by the
                // `transition` style, we need to ensure an animation frame has passed between
                // setting each style.
                switchMap(() => raf$), tap(() => elem.style[prop] = from), switchMap(() => raf$), tap(() => elem.style.transition = `all ${duration}ms ease-in-out`), switchMap(() => raf$), tap(() => elem.style[prop] = to), switchMap(() => timer(getActualDuration(elem))), switchMap(() => this.void$));
        };
        const animateLeave = (elem) => animateProp(elem, 'opacity', '1', '0.1');
        const animateEnter = (elem) => animateProp(elem, 'opacity', '0.1', '1');
        let done$ = this.void$;
        if (this.currViewContainer.parentElement) {
            done$ = done$.pipe(
            // Remove the current view from the viewer.
            switchMap(() => animateLeave(this.currViewContainer)), tap(() => this.currViewContainer.parentElement.removeChild(this.currViewContainer)), tap(() => this.docRemoved.emit()));
        }
        return done$.pipe(
        // Insert the next view into the viewer.
        tap(() => this.hostElement.appendChild(this.nextViewContainer)), tap(() => onInsertedCb()), tap(() => this.docInserted.emit()), switchMap(() => animateEnter(this.nextViewContainer)), 
        // Update the view references and clean up unused nodes.
        tap(() => {
            const prevViewContainer = this.currViewContainer;
            this.currViewContainer = this.nextViewContainer;
            this.nextViewContainer = prevViewContainer;
            this.nextViewContainer.innerHTML = ''; // Empty to release memory.
        }));
    }
}
// Enable/Disable view transition animations.
DocViewerComponent.animationsEnabled = true;
DocViewerComponent.ɵfac = function DocViewerComponent_Factory(t) { return new (t || DocViewerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Logger), i0.ɵɵdirectiveInject(i2.Title), i0.ɵɵdirectiveInject(i2.Meta), i0.ɵɵdirectiveInject(i3.TocService), i0.ɵɵdirectiveInject(i4.ElementsLoader)); };
DocViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DocViewerComponent, selectors: [["aio-doc-viewer"]], inputs: { doc: "doc" }, outputs: { docReady: "docReady", docRemoved: "docRemoved", docInserted: "docInserted", docRendered: "docRendered" }, decls: 0, vars: 0, template: function DocViewerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DocViewerComponent, [{
        type: Component,
        args: [{
                selector: 'aio-doc-viewer',
                template: ''
                // TODO(robwormald): shadow DOM and emulated don't work here (?!)
                // encapsulation: ViewEncapsulation.Native
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Logger }, { type: i2.Title }, { type: i2.Meta }, { type: i3.TocService }, { type: i4.ElementsLoader }]; }, { doc: [{
            type: Input
        }], docReady: [{
            type: Output
        }], docRemoved: [{
            type: Output
        }], docInserted: [{
            type: Output
        }], docRendered: [{
            type: Output
        }] }); })();
//# sourceMappingURL=doc-viewer.component.js.map