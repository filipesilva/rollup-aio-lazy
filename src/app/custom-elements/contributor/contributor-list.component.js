import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./contributor.service";
import * as i2 from "app/shared/location.service";
import * as i3 from "@angular/common";
import * as i4 from "./contributor.component";
function ContributorListComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function ContributorListComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r66); const name_r64 = ctx.$implicit; const ctx_r65 = i0.ɵɵnextContext(); return ctx_r65.selectGroup(name_r64); })("keyup.enter", function ContributorListComponent_a_1_Template_a_keyup_enter_0_listener($event) { i0.ɵɵrestoreView(_r66); const name_r64 = ctx.$implicit; const ctx_r67 = i0.ɵɵnextContext(); return ctx_r67.selectGroup(name_r64); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r64 = ctx.$implicit;
    const ctx_r62 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", name_r64 == ctx_r62.selectedGroup.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(name_r64);
} }
function ContributorListComponent_section_2_aio_contributor_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "aio-contributor", 7);
} if (rf & 2) {
    const person_r69 = ctx.$implicit;
    i0.ɵɵproperty("person", person_r69);
} }
function ContributorListComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, ContributorListComponent_section_2_aio_contributor_2_Template, 1, 1, "aio-contributor", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r63 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r63.selectedGroup.contributors);
} }
export class ContributorListComponent {
    constructor(contributorService, locationService) {
        this.contributorService = contributorService;
        this.locationService = locationService;
    }
    ngOnInit() {
        const groupName = this.locationService.search()['group'] || '';
        // no need to unsubscribe because `contributors` completes
        this.contributorService.contributors
            .subscribe(grps => {
            this.groups = grps;
            this.groupNames = grps.map(g => g.name);
            this.selectGroup(groupName);
        });
    }
    selectGroup(name) {
        name = name.toLowerCase();
        this.selectedGroup = this.groups.find(g => g.name.toLowerCase() === name) || this.groups[0];
        this.locationService.setSearch('', { group: this.selectedGroup.name });
    }
}
ContributorListComponent.ɵfac = function ContributorListComponent_Factory(t) { return new (t || ContributorListComponent)(i0.ɵɵdirectiveInject(i1.ContributorService), i0.ɵɵdirectiveInject(i2.LocationService)); };
ContributorListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ContributorListComponent, selectors: [["aio-contributor-list"]], decls: 3, vars: 2, consts: [[1, "flex-center", "group-buttons"], ["class", "button mat-button filter-button", 3, "selected", "click", "keyup.enter", 4, "ngFor", "ngForOf"], ["class", "grid-fluid", 4, "ngIf"], [1, "button", "mat-button", "filter-button", 3, "click", "keyup.enter"], [1, "grid-fluid"], [1, "contributor-group"], [3, "person", 4, "ngFor", "ngForOf"], [3, "person"]], template: function ContributorListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ContributorListComponent_a_1_Template, 2, 3, "a", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, ContributorListComponent_section_2_Template, 3, 1, "section", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.groupNames);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedGroup);
    } }, directives: [i3.NgForOf, i3.NgIf, i4.ContributorComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContributorListComponent, [{
        type: Component,
        args: [{
                selector: `aio-contributor-list`,
                template: `
  <div class="flex-center group-buttons">
<a *ngFor="let name of groupNames"
    [class.selected]="name == selectedGroup.name"
    class="button mat-button filter-button"
    (click)="selectGroup(name)"
    (keyup.enter)="selectGroup(name)">{{name}}</a>
  </div>
  <section *ngIf="selectedGroup" class="grid-fluid">
    <div class="contributor-group">
      <aio-contributor *ngFor="let person of selectedGroup.contributors" [person]="person"></aio-contributor>
    </div>
  </section>`
            }]
    }], function () { return [{ type: i1.ContributorService }, { type: i2.LocationService }]; }, null); })();
//# sourceMappingURL=contributor-list.component.js.map