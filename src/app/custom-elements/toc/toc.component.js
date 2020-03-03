import { Component, ViewChildren } from '@angular/core';
import { asapScheduler, combineLatest, Subject } from 'rxjs';
import { startWith, subscribeOn, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/scroll.service";
import * as i2 from "app/shared/toc.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
const _c0 = ["tocItem"];
function TocComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, " Contents ");
    i0.ɵɵelementEnd();
} }
function TocComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function TocComponent_div_0_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r98); const ctx_r97 = i0.ɵɵnextContext(2); return ctx_r97.toggle(false); });
    i0.ɵɵtext(1, " Contents ");
    i0.ɵɵelement(2, "mat-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r94 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-pressed", !ctx_r94.isCollapsed);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("collapsed", ctx_r94.isCollapsed);
} }
function TocComponent_div_0_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 11, 12);
    i0.ɵɵelement(2, "a", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r103 = i0.ɵɵnextContext();
    const toc_r99 = ctx_r103.$implicit;
    const i_r100 = ctx_r103.index;
    const ctx_r101 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(toc_r99.level);
    i0.ɵɵclassProp("secondary", ctx_r101.type === "EmbeddedExpandable" && i_r100 >= ctx_r101.primaryMax)("active", i_r100 === ctx_r101.activeIndex);
    i0.ɵɵpropertyInterpolate("title", toc_r99.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", toc_r99.href, i0.ɵɵsanitizeUrl)("innerHTML", toc_r99.content, i0.ɵɵsanitizeHtml);
} }
function TocComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TocComponent_div_0_ng_container_4_li_1_Template, 3, 10, "li", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const toc_r99 = ctx.$implicit;
    const ctx_r95 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r95.type === "Floating" || toc_r99.level !== "h1");
} }
function TocComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function TocComponent_div_0_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r105); const ctx_r104 = i0.ɵɵnextContext(2); return ctx_r104.toggle(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r96 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("collapsed", ctx_r96.isCollapsed);
    i0.ɵɵattribute("aria-pressed", !ctx_r96.isCollapsed);
} }
function TocComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, TocComponent_div_0_div_1_Template, 2, 0, "div", 2);
    i0.ɵɵtemplate(2, TocComponent_div_0_button_2_Template, 3, 3, "button", 3);
    i0.ɵɵelementStart(3, "ul", 4);
    i0.ɵɵtemplate(4, TocComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TocComponent_div_0_button_5_Template, 1, 3, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("collapsed", ctx_r92.isCollapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.type === "EmbeddedSimple");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.type === "EmbeddedExpandable");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("embedded", ctx_r92.type !== "Floating");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r92.tocList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.type === "EmbeddedExpandable");
} }
export class TocComponent {
    constructor(scrollService, elementRef, tocService) {
        this.scrollService = scrollService;
        this.tocService = tocService;
        this.activeIndex = null;
        this.type = 'None';
        this.isCollapsed = true;
        this.isEmbedded = false;
        this.onDestroy = new Subject();
        this.primaryMax = 4;
        this.isEmbedded = elementRef.nativeElement.className.indexOf('embedded') !== -1;
    }
    ngOnInit() {
        this.tocService.tocList
            .pipe(takeUntil(this.onDestroy))
            .subscribe(tocList => {
            this.tocList = tocList;
            const itemCount = count(this.tocList, item => item.level !== 'h1');
            this.type = (itemCount > 0) ?
                this.isEmbedded ?
                    (itemCount > this.primaryMax) ?
                        'EmbeddedExpandable' :
                        'EmbeddedSimple' :
                    'Floating' :
                'None';
        });
    }
    ngAfterViewInit() {
        if (!this.isEmbedded) {
            // We use the `asap` scheduler because updates to `activeItemIndex` are triggered by DOM changes,
            // which, in turn, are caused by the rendering that happened due to a ChangeDetection.
            // Without asap, we would be updating the model while still in a ChangeDetection handler, which is disallowed by Angular.
            combineLatest([
                this.tocService.activeItemIndex.pipe(subscribeOn(asapScheduler)),
                this.items.changes.pipe(startWith(this.items)),
            ])
                .pipe(takeUntil(this.onDestroy))
                .subscribe(([index, items]) => {
                this.activeIndex = index;
                if (index === null || index >= items.length) {
                    return;
                }
                const e = items.toArray()[index].nativeElement;
                const p = e.offsetParent;
                const eRect = e.getBoundingClientRect();
                const pRect = p.getBoundingClientRect();
                const isInViewport = (eRect.top >= pRect.top) && (eRect.bottom <= pRect.bottom);
                if (!isInViewport) {
                    p.scrollTop += (eRect.top - pRect.top) - (p.clientHeight / 2);
                }
            });
        }
    }
    ngOnDestroy() {
        this.onDestroy.next();
    }
    toggle(canScroll = true) {
        this.isCollapsed = !this.isCollapsed;
        if (canScroll && this.isCollapsed) {
            this.toTop();
        }
    }
    toTop() {
        this.scrollService.scrollToTop();
    }
}
TocComponent.ɵfac = function TocComponent_Factory(t) { return new (t || TocComponent)(i0.ɵɵdirectiveInject(i1.ScrollService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.TocService)); };
TocComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TocComponent, selectors: [["aio-toc"]], viewQuery: function TocComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, decls: 1, vars: 1, consts: [["class", "toc-inner no-print", 3, "collapsed", 4, "ngIf"], [1, "toc-inner", "no-print"], ["class", "toc-heading embedded", 4, "ngIf"], ["type", "button", "class", "toc-heading embedded secondary", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 3, "click", 4, "ngIf"], [1, "toc-list"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "toc-more-items embedded material-icons", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 3, "collapsed", "click", 4, "ngIf"], [1, "toc-heading", "embedded"], ["type", "button", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 1, "toc-heading", "embedded", "secondary", 3, "click"], ["svgIcon", "keyboard_arrow_right", 1, "rotating-icon"], [3, "title", "class", "secondary", "active", 4, "ngIf"], [3, "title"], ["tocItem", ""], [3, "href", "innerHTML"], ["type", "button", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 1, "toc-more-items", "embedded", "material-icons", 3, "click"]], template: function TocComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TocComponent_div_0_Template, 6, 8, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.type !== "None");
    } }, directives: [i3.NgIf, i3.NgForOf, i4.MatIcon], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TocComponent, [{
        type: Component,
        args: [{
                selector: 'aio-toc',
                templateUrl: 'toc.component.html',
                styles: []
            }]
    }], function () { return [{ type: i1.ScrollService }, { type: i0.ElementRef }, { type: i2.TocService }]; }, { items: [{
            type: ViewChildren,
            args: ['tocItem']
        }] }); })();
function count(array, fn) {
    return array.reduce((result, item) => fn(item) ? result + 1 : result, 0);
}
//# sourceMappingURL=toc.component.js.map