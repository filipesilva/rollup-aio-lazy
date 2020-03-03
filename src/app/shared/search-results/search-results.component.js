import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SearchResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function SearchResultsComponent_ng_template_2_div_2_li_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} if (rf & 2) {
    const page_r29 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("symbol ", page_r29.type, "");
} }
function SearchResultsComponent_ng_template_2_div_2_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵelementStart(1, "a", 11);
    i0.ɵɵlistener("click", function SearchResultsComponent_ng_template_2_div_2_li_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r33); const page_r29 = ctx.$implicit; const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.onResultSelected(page_r29, $event); });
    i0.ɵɵtemplate(2, SearchResultsComponent_ng_template_2_div_2_li_4_span_2_Template, 1, 3, "span", 12);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r29 = ctx.$implicit;
    const area_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", page_r29.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", area_r26.name === "api");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("deprecated-api-item", page_r29.deprecated);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r29.title);
} }
function SearchResultsComponent_ng_template_2_div_2_li_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} if (rf & 2) {
    const page_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("symbol ", page_r35.type, "");
} }
function SearchResultsComponent_ng_template_2_div_2_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵelementStart(1, "a", 11);
    i0.ɵɵlistener("click", function SearchResultsComponent_ng_template_2_div_2_li_6_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r39); const page_r35 = ctx.$implicit; const ctx_r38 = i0.ɵɵnextContext(3); return ctx_r38.onResultSelected(page_r35, $event); });
    i0.ɵɵtemplate(2, SearchResultsComponent_ng_template_2_div_2_li_6_span_2_Template, 1, 3, "span", 12);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r35 = ctx.$implicit;
    const area_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", page_r35.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", area_r26.name === "api");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("deprecated-api-item", page_r35.deprecated);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r35.title);
} }
function SearchResultsComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "h3", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 8);
    i0.ɵɵtemplate(4, SearchResultsComponent_ng_template_2_div_2_li_4_Template, 5, 5, "li", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul");
    i0.ɵɵtemplate(6, SearchResultsComponent_ng_template_2_div_2_li_6_Template, 5, 5, "li", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const area_r26 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", area_r26.name, " (", area_r26.pages.length + area_r26.priorityPages.length, ")");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", area_r26.priorityPages);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", area_r26.pages);
} }
function SearchResultsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 4);
    i0.ɵɵtext(1, "Search Results");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, SearchResultsComponent_ng_template_2_div_2_Template, 7, 4, "div", 5);
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r22.searchAreas);
} }
function SearchResultsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r24.notFoundMessage);
} }
/**
 * A component to display search results in groups
 */
export class SearchResultsComponent {
    constructor() {
        /**
         * The results to display
         */
        this.searchResults = null;
        /**
         * Emitted when the user selects a search result
         */
        this.resultSelected = new EventEmitter();
        this.defaultArea = 'other';
        this.notFoundMessage = 'Searching ...';
        this.topLevelFolders = ['guide', 'tutorial'];
        this.searchAreas = [];
    }
    ngOnChanges() {
        this.searchAreas = this.processSearchResults(this.searchResults);
    }
    onResultSelected(page, event) {
        // Emit a `resultSelected` event if the result is to be displayed on this page.
        if (event.button === 0 && !event.ctrlKey && !event.metaKey) {
            this.resultSelected.emit(page);
        }
    }
    // Map the search results into groups by area
    processSearchResults(search) {
        if (!search) {
            return [];
        }
        this.notFoundMessage = 'No results found.';
        const searchAreaMap = {};
        search.results.forEach(result => {
            if (!result.title) {
                return;
            } // bad data; should fix
            const areaName = this.computeAreaName(result) || this.defaultArea;
            const area = searchAreaMap[areaName] = searchAreaMap[areaName] || [];
            area.push(result);
        });
        const keys = Object.keys(searchAreaMap).sort((l, r) => l > r ? 1 : -1);
        return keys.map(name => {
            const { priorityPages, pages, deprecated } = splitPages(searchAreaMap[name]);
            return {
                name,
                priorityPages,
                pages: pages.concat(deprecated),
            };
        });
    }
    // Split the search result path and use the top level folder, if there is one, as the area name.
    computeAreaName(result) {
        if (this.topLevelFolders.indexOf(result.path) !== -1) {
            return result.path;
        }
        const [areaName, rest] = result.path.split('/', 2);
        return rest && areaName;
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(); };
SearchResultsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchResultsComponent, selectors: [["aio-search-results"]], inputs: { searchResults: "searchResults" }, outputs: { resultSelected: "resultSelected" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 6, vars: 3, consts: [[1, "search-results"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["searchResults", ""], ["notFound", ""], [1, "visually-hidden"], ["class", "search-area", 4, "ngFor", "ngForOf"], [1, "search-area"], [1, "search-section-header"], [1, "priority-pages"], ["class", "search-page", 4, "ngFor", "ngForOf"], [1, "search-page"], [1, "search-result-item", 3, "href", "click"], [3, "class", 4, "ngIf"], [1, "not-found"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, SearchResultsComponent_div_1_Template, 1, 0, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, SearchResultsComponent_ng_template_2_Template, 3, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, SearchResultsComponent_ng_template_4_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r21 = i0.ɵɵreference(3);
        const _r23 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchAreas.length)("ngIfThen", _r21)("ngIfElse", _r23);
    } }, directives: [i1.NgIf, i1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchResultsComponent, [{
        type: Component,
        args: [{
                selector: 'aio-search-results',
                templateUrl: './search-results.component.html',
            }]
    }], null, { searchResults: [{
            type: Input
        }], resultSelected: [{
            type: Output
        }] }); })();
function splitPages(allPages) {
    const priorityPages = [];
    const pages = [];
    const deprecated = [];
    allPages.forEach(page => {
        if (page.deprecated) {
            deprecated.push(page);
        }
        else if (priorityPages.length < 5) {
            priorityPages.push(page);
        }
        else {
            pages.push(page);
        }
    });
    while (priorityPages.length < 5 && pages.length) {
        priorityPages.push(pages.shift());
    }
    while (priorityPages.length < 5 && deprecated.length) {
        priorityPages.push(deprecated.shift());
    }
    pages.sort(compareResults);
    return { priorityPages, pages, deprecated };
}
function compareResults(l, r) {
    return l.title.toUpperCase() > r.title.toUpperCase() ? 1 : -1;
}
//# sourceMappingURL=search-results.component.js.map