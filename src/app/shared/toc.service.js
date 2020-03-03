import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "app/shared/scroll-spy.service";
export class TocService {
    constructor(document, domSanitizer, scrollSpyService) {
        this.document = document;
        this.domSanitizer = domSanitizer;
        this.scrollSpyService = scrollSpyService;
        this.tocList = new ReplaySubject(1);
        this.activeItemIndex = new ReplaySubject(1);
        this.scrollSpyInfo = null;
    }
    genToc(docElement, docId = '') {
        this.resetScrollSpyInfo();
        if (!docElement) {
            this.tocList.next([]);
            return;
        }
        const headings = this.findTocHeadings(docElement);
        const idMap = new Map();
        const tocList = headings.map(heading => {
            const { title, content } = this.extractHeadingSafeHtml(heading);
            return {
                level: heading.tagName.toLowerCase(),
                href: `${docId}#${this.getId(heading, idMap)}`,
                title,
                content,
            };
        });
        this.tocList.next(tocList);
        this.scrollSpyInfo = this.scrollSpyService.spyOn(headings);
        this.scrollSpyInfo.active.subscribe(item => this.activeItemIndex.next(item && item.index));
    }
    reset() {
        this.resetScrollSpyInfo();
        this.tocList.next([]);
    }
    // Transform the HTML content to be safe to use in the ToC:
    //   - Strip off certain auto-generated elements (such as GitHub links and heading anchor links).
    //   - Strip off any anchor links (but keep their content)
    //   - Mark the HTML as trusted to be used with `[innerHTML]`.
    extractHeadingSafeHtml(heading) {
        const div = this.document.createElement('div');
        div.innerHTML = heading.innerHTML;
        // Remove any `.github-links` or `.header-link` elements (along with their content).
        querySelectorAll(div, '.github-links, .header-link').forEach(removeNode);
        // Remove any remaining `a` elements (but keep their content).
        querySelectorAll(div, 'a').forEach(anchorLink => {
            // We want to keep the content of this anchor, so move it into its parent.
            const parent = anchorLink.parentNode;
            while (anchorLink.childNodes.length) {
                parent.insertBefore(anchorLink.childNodes[0], anchorLink);
            }
            // Now, remove the anchor.
            removeNode(anchorLink);
        });
        return {
            // Security: The document element which provides this heading content is always authored by
            // the documentation team and is considered to be safe.
            content: this.domSanitizer.bypassSecurityTrustHtml(div.innerHTML.trim()),
            title: (div.textContent || '').trim(),
        };
    }
    findTocHeadings(docElement) {
        // const headings = querySelectorAll(docElement, 'h1,h2,h3');
        const headings = querySelectorAll(docElement, 'h1,h2,h3');
        const skipNoTocHeadings = (heading) => !/(?:no-toc|notoc)/i.test(heading.className);
        return headings.filter(skipNoTocHeadings);
    }
    resetScrollSpyInfo() {
        if (this.scrollSpyInfo) {
            this.scrollSpyInfo.unspy();
            this.scrollSpyInfo = null;
        }
        this.activeItemIndex.next(null);
    }
    // Extract the id from the heading; create one if necessary
    // Is it possible for a heading to lack an id?
    getId(h, idMap) {
        let id = h.id;
        if (id) {
            addToMap(id);
        }
        else {
            id = (h.textContent || '').trim().toLowerCase().replace(/\W+/g, '-');
            id = addToMap(id);
            h.id = id;
        }
        return id;
        // Map guards against duplicate id creation.
        function addToMap(key) {
            const oldCount = idMap.get(key) || 0;
            const count = oldCount + 1;
            idMap.set(key, count);
            return count === 1 ? key : `${key}-${count}`;
        }
    }
}
TocService.ɵfac = function TocService_Factory(t) { return new (t || TocService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.ScrollSpyService)); };
TocService.ɵprov = i0.ɵɵdefineInjectable({ token: TocService, factory: TocService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TocService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.DomSanitizer }, { type: i2.ScrollSpyService }]; }, null); })();
function querySelectorAll(parent, selector) {
    // Wrap the `NodeList` as a regular `Array` to have access to array methods.
    // NOTE: IE11 does not even support some methods of `NodeList`, such as
    //       [NodeList#forEach()](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach).
    return Array.from(parent.querySelectorAll(selector));
}
function removeNode(node) {
    if (node.parentNode !== null) {
        // We cannot use `Node.remove()` because of IE11.
        node.parentNode.removeChild(node);
    }
}
//# sourceMappingURL=toc.service.js.map