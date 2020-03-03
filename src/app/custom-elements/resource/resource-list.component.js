import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./resource.service";
import * as i2 from "app/shared/location.service";
import * as i3 from "@angular/common";
function ResourceListComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function ResourceListComponent_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r85); const category_r83 = ctx.$implicit; const ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.selectCategory(category_r83.id); })("keyup.enter", function ResourceListComponent_a_2_Template_a_keyup_enter_0_listener($event) { i0.ɵɵrestoreView(_r85); const category_r83 = ctx.$implicit; const ctx_r86 = i0.ɵɵnextContext(); return ctx_r86.selectCategory(category_r83.id); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r83 = ctx.$implicit;
    const ctx_r81 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", category_r83.id == ctx_r81.selectedCategory.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(category_r83.title);
} }
function ResourceListComponent_div_5_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "a", 11);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 12);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const resource_r89 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", resource_r89.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(resource_r89.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(resource_r89.desc || "No Description");
} }
function ResourceListComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ResourceListComponent_div_5_div_4_div_1_Template, 7, 3, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const resource_r89 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", resource_r89.rev);
} }
function ResourceListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "a", 7);
    i0.ɵɵelementStart(2, "h3", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ResourceListComponent_div_5_div_4_Template, 2, 1, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subCategory_r87 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", subCategory_r87.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subCategory_r87.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", subCategory_r87.resources);
} }
/* tslint:disable:template-accessibility-elements-content */
export class ResourceListComponent {
    constructor(resourceService, locationService) {
        this.resourceService = resourceService;
        this.locationService = locationService;
    }
    ngOnInit() {
        const category = this.locationService.search()['category'] || '';
        // Not using async pipe because cats appear twice in template
        // No need to unsubscribe because categories observable completes.
        this.resourceService.categories.subscribe(cats => {
            this.categories = cats;
            this.selectCategory(category);
        });
    }
    selectCategory(id) {
        id = id.toLowerCase();
        this.selectedCategory =
            this.categories.find(category => category.id.toLowerCase() === id) || this.categories[0];
        this.locationService.setSearch('', { category: this.selectedCategory.id });
    }
}
ResourceListComponent.ɵfac = function ResourceListComponent_Factory(t) { return new (t || ResourceListComponent)(i0.ɵɵdirectiveInject(i1.ResourceService), i0.ɵɵdirectiveInject(i2.LocationService)); };
ResourceListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResourceListComponent, selectors: [["aio-resource-list"]], decls: 6, vars: 2, consts: [[1, "resources-container"], [1, "flex-center", "group-buttons"], ["class", "button mat-button filter-button", 3, "selected", "click", "keyup.enter", 4, "ngFor", "ngForOf"], [1, "l-flex--column", "align-items-center"], [1, "shadow-1", "showcase"], [4, "ngFor", "ngForOf"], [1, "button", "mat-button", "filter-button", 3, "click", "keyup.enter"], [1, "h-anchor-offset", 3, "id"], [1, "subcategory-title"], ["class", "c-resource", 4, "ngIf"], [1, "c-resource"], ["rel", "noopener", "target", "_blank", 1, "l-flex--column", "resource-row-link", 3, "href"], [1, "resource-description"]], template: function ResourceListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, ResourceListComponent_a_2_Template, 2, 3, "a", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, ResourceListComponent_div_5_Template, 5, 3, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.selectedCategory == null ? null : ctx.selectedCategory.subCategories);
    } }, directives: [i3.NgForOf, i3.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ResourceListComponent, [{
        type: Component,
        args: [{
                selector: 'aio-resource-list',
                templateUrl: 'resource-list.component.html'
            }]
    }], function () { return [{ type: i1.ResourceService }, { type: i2.LocationService }]; }, null); })();
//# sourceMappingURL=resource-list.component.js.map