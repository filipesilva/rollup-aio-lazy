import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/location.service";
const _c0 = ["searchBox"];
/**
 * This component provides a text box to type a search query that will be sent to the SearchService.
 *
 * When you arrive at a page containing this component, it will retrieve the `query` from the browser
 * address bar. If there is a query then this will be made.
 *
 * Focussing on the input box will resend whatever query is there. This can be useful if the search
 * results had been hidden for some reason.
 *
 */
export class SearchBoxComponent {
    constructor(locationService) {
        this.locationService = locationService;
        this.searchDebounce = 300;
        this.searchSubject = new Subject();
        // tslint:disable-next-line: no-output-on-prefix
        this.onSearch = this.searchSubject.pipe(distinctUntilChanged(), debounceTime(this.searchDebounce));
        // tslint:disable-next-line: no-output-on-prefix
        this.onFocus = new EventEmitter();
    }
    /**
     * When we first show this search box we trigger a search if there is a search query in the URL
     */
    ngAfterViewInit() {
        const query = this.locationService.search()['search'];
        if (query) {
            this.query = this.decodeQuery(query);
            this.doSearch();
        }
    }
    doSearch() {
        this.searchSubject.next(this.query);
    }
    doFocus() {
        this.onFocus.emit(this.query);
    }
    focus() {
        this.searchBox.nativeElement.focus();
    }
    decodeQuery(query) {
        // `decodeURIComponent` does not handle `+` for spaces, replace via RexEx.
        return query.replace(/\+/g, ' ');
    }
    get query() { return this.searchBox.nativeElement.value; }
    set query(value) { this.searchBox.nativeElement.value = value; }
}
SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) { return new (t || SearchBoxComponent)(i0.ɵɵdirectiveInject(i1.LocationService)); };
SearchBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchBoxComponent, selectors: [["aio-search-box"]], viewQuery: function SearchBoxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchBox = _t.first);
    } }, outputs: { onSearch: "onSearch", onFocus: "onFocus" }, decls: 2, vars: 0, consts: [["type", "search", "aria-label", "search", "placeholder", "Search", 3, "input", "keyup", "focus", "click"], ["searchBox", ""]], template: function SearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("input", function SearchBoxComponent_Template_input_input_0_listener($event) { return ctx.doSearch(); })("keyup", function SearchBoxComponent_Template_input_keyup_0_listener($event) { return ctx.doSearch(); })("focus", function SearchBoxComponent_Template_input_focus_0_listener($event) { return ctx.doFocus(); })("click", function SearchBoxComponent_Template_input_click_0_listener($event) { return ctx.doSearch(); });
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchBoxComponent, [{
        type: Component,
        args: [{
                selector: 'aio-search-box',
                template: `<input #searchBox
    type="search"
    aria-label="search"
    placeholder="Search"
    (input)="doSearch()"
    (keyup)="doSearch()"
    (focus)="doFocus()"
    (click)="doSearch()">`
            }]
    }], function () { return [{ type: i1.LocationService }]; }, { searchBox: [{
            type: ViewChild,
            args: ['searchBox', { static: true }]
        }], onSearch: [{
            type: Output
        }], onFocus: [{
            type: Output
        }] }); })();
//# sourceMappingURL=search-box.component.js.map