/*
* API List & Filter Component
*
* A page that displays a formatted list of the public Angular API entities.
* Clicking on a list item triggers navigation to the corresponding API entity document.
* Can add/remove API entity links based on filter settings.
*/
import { Component, ViewChild } from '@angular/core';
import { combineLatest, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
import * as i2 from "app/shared/location.service";
import * as i3 from "../../shared/select/select.component";
import * as i4 from "@angular/common";
const _c0 = ["filter"];
function ApiListComponent_div_9_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵelementStart(1, "a", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r55 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("deprecated-api-item", section_r55.deprecated);
    i0.ɵɵproperty("href", section_r55.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(section_r55.title);
} }
function ApiListComponent_div_9_ul_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 13);
    i0.ɵɵelementStart(2, "a", 11);
    i0.ɵɵelement(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("deprecated-api-item", item_r60.stability === "deprecated");
    i0.ɵɵproperty("href", item_r60.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("symbol ", item_r60.docType, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r60.title, " ");
} }
function ApiListComponent_div_9_ul_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 12);
    i0.ɵɵtemplate(1, ApiListComponent_div_9_ul_2_ng_container_1_Template, 5, 7, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r55 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", section_r55.items);
} }
function ApiListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ApiListComponent_div_9_h2_1_Template, 3, 4, "h2", 9);
    i0.ɵɵtemplate(2, ApiListComponent_div_9_ul_2_Template, 2, 1, "ul", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r55 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", section_r55.items);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", section_r55.items && section_r55.items.length);
} }
class SearchCriteria {
    constructor() {
        this.query = '';
        this.status = 'all';
        this.type = 'all';
    }
}
export class ApiListComponent {
    constructor(apiService, locationService) {
        this.apiService = apiService;
        this.locationService = locationService;
        this.showStatusMenu = false;
        this.showTypeMenu = false;
        this.criteriaSubject = new ReplaySubject(1);
        this.searchCriteria = new SearchCriteria();
        // API types
        this.types = [
            { value: 'all', title: 'All' },
            { value: 'class', title: 'Class' },
            { value: 'const', title: 'Const' },
            { value: 'decorator', title: 'Decorator' },
            { value: 'directive', title: 'Directive' },
            { value: 'enum', title: 'Enum' },
            { value: 'function', title: 'Function' },
            { value: 'interface', title: 'Interface' },
            { value: 'pipe', title: 'Pipe' },
            { value: 'ngmodule', title: 'NgModule' },
            { value: 'type-alias', title: 'Type alias' },
            { value: 'package', title: 'Package' }
        ];
        this.statuses = [
            { value: 'all', title: 'All' },
            { value: 'stable', title: 'Stable' },
            { value: 'deprecated', title: 'Deprecated' },
            { value: 'security-risk', title: 'Security Risk' }
        ];
    }
    ngOnInit() {
        this.filteredSections =
            combineLatest([
                this.apiService.sections,
                this.criteriaSubject,
            ]).pipe(map(results => ({ sections: results[0], criteria: results[1] })), map(results => (results.sections
                .map(section => (Object.assign(Object.assign({}, section), { items: this.filterSection(section, results.criteria) }))))));
        this.initializeSearchCriteria();
    }
    // TODO: may need to debounce as the original did
    // although there shouldn't be any perf consequences if we don't
    setQuery(query) {
        this.setSearchCriteria({ query: (query || '').toLowerCase().trim() });
    }
    setStatus(status) {
        this.toggleStatusMenu();
        this.status = status;
        this.setSearchCriteria({ status: status.value });
    }
    setType(type) {
        this.toggleTypeMenu();
        this.type = type;
        this.setSearchCriteria({ type: type.value });
    }
    toggleStatusMenu() {
        this.showStatusMenu = !this.showStatusMenu;
    }
    toggleTypeMenu() {
        this.showTypeMenu = !this.showTypeMenu;
    }
    //////// Private //////////
    filterSection(section, { query, status, type }) {
        const sectionNameMatches = !query || section.name.indexOf(query) !== -1;
        const matchesQuery = (item) => sectionNameMatches || item.name.indexOf(query) !== -1;
        const matchesStatus = (item) => status === 'all' || status === item.stability || (status === 'security-risk' && item.securityRisk);
        const matchesType = (item) => type === 'all' || type === item.docType;
        const items = section.items.filter(item => matchesType(item) && matchesStatus(item) && matchesQuery(item));
        // If there are no items we still return an empty array if the section name matches and the type is 'package'
        return items.length ? items : (sectionNameMatches && type === 'package') ? [] : null;
    }
    // Get initial search criteria from URL search params
    initializeSearchCriteria() {
        const { query, status, type } = this.locationService.search();
        const q = (query || '').toLowerCase();
        // Hack: can't bind to query because input cursor always forced to end-of-line.
        this.queryEl.nativeElement.value = q;
        this.status = this.statuses.find(x => x.value === status) || this.statuses[0];
        this.type = this.types.find(x => x.value === type) || this.types[0];
        this.searchCriteria = {
            query: q,
            status: this.status.value,
            type: this.type.value
        };
        this.criteriaSubject.next(this.searchCriteria);
    }
    setLocationSearch() {
        const { query, status, type } = this.searchCriteria;
        const params = {
            query: query ? query : undefined,
            status: status !== 'all' ? status : undefined,
            type: type !== 'all' ? type : undefined
        };
        this.locationService.setSearch('API Search', params);
    }
    setSearchCriteria(criteria) {
        this.criteriaSubject.next(Object.assign(this.searchCriteria, criteria));
        this.setLocationSearch();
    }
}
ApiListComponent.ɵfac = function ApiListComponent_Factory(t) { return new (t || ApiListComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.LocationService)); };
ApiListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ApiListComponent, selectors: [["aio-api-list"]], viewQuery: function ApiListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.queryEl = _t.first);
    } }, decls: 11, vars: 9, consts: [[1, "l-flex-wrap", "api-filter"], ["label", "Type:", 3, "options", "selected", "showSymbol", "change"], ["label", "Status:", 3, "options", "selected", "disabled", "change"], [1, "form-search"], ["placeholder", "Filter", "aria-label", "Filter Search", 3, "input"], ["filter", ""], [1, "material-icons"], [1, "api-list-container", "l-content-small", "docs-content"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "api-list", 4, "ngIf"], [3, "href"], [1, "api-list"], [1, "api-item"]], template: function ApiListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "aio-select", 1);
        i0.ɵɵlistener("change", function ApiListComponent_Template_aio_select_change_1_listener($event) { return ctx.setType($event.option); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "aio-select", 2);
        i0.ɵɵlistener("change", function ApiListComponent_Template_aio_select_change_2_listener($event) { return ctx.setStatus($event.option); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "input", 4, 5);
        i0.ɵɵlistener("input", function ApiListComponent_Template_input_input_4_listener($event) { return ctx.setQuery($event.target.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "i", 6);
        i0.ɵɵtext(7, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "article", 7);
        i0.ɵɵtemplate(9, ApiListComponent_div_9_Template, 3, 2, "div", 8);
        i0.ɵɵpipe(10, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("options", ctx.types)("selected", ctx.type)("showSymbol", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("options", ctx.statuses)("selected", ctx.status)("disabled", ctx.type.value === "package");
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(10, 7, ctx.filteredSections));
    } }, directives: [i3.SelectComponent, i4.NgForOf, i4.NgIf], pipes: [i4.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ApiListComponent, [{
        type: Component,
        args: [{
                selector: 'aio-api-list',
                templateUrl: './api-list.component.html',
            }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.LocationService }]; }, { queryEl: [{
            type: ViewChild,
            args: ['filter', { static: true }]
        }] }); })();
//# sourceMappingURL=api-list.component.js.map