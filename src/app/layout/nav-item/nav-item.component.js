import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
function NavItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r134 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r134.node.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", ctx_r134.node.tooltip);
    i0.ɵɵproperty("ngClass", ctx_r134.classes);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r134.node.title);
} }
function NavItemComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function NavItemComponent_div_1_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r139 = i0.ɵɵnextContext(2); return ctx_r139.headerClicked(); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r136 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", ctx_r136.node.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", ctx_r136.node.tooltip);
    i0.ɵɵproperty("ngClass", ctx_r136.classes);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r136.node.title);
} }
function NavItemComponent_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function NavItemComponent_div_1_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r142); const ctx_r141 = i0.ɵɵnextContext(2); return ctx_r141.headerClicked(); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r137 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r137.node.tooltip);
    i0.ɵɵproperty("ngClass", ctx_r137.classes);
    i0.ɵɵattribute("aria-pressed", ctx_r137.isExpanded);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r137.node.title);
} }
function NavItemComponent_div_1_aio_nav_item_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "aio-nav-item", 9);
} if (rf & 2) {
    const node_r143 = ctx.$implicit;
    const ctx_r138 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("level", ctx_r138.level + 1)("isWide", ctx_r138.isWide)("isParentExpanded", ctx_r138.isExpanded)("node", node_r143)("selectedNodes", ctx_r138.selectedNodes);
} }
function NavItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NavItemComponent_div_1_a_1_Template, 4, 4, "a", 2);
    i0.ɵɵtemplate(2, NavItemComponent_div_1_button_2_Template, 4, 4, "button", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtemplate(4, NavItemComponent_div_1_aio_nav_item_4_Template, 1, 5, "aio-nav-item", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r135 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r135.node.url != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r135.node.url == null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r135.classes);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r135.nodeChildren);
} }
export class NavItemComponent {
    constructor() {
        this.isWide = false;
        this.level = 1;
        this.isParentExpanded = true;
        this.isExpanded = false;
        this.isSelected = false;
    }
    ngOnChanges() {
        this.nodeChildren = this.node && this.node.children ? this.node.children.filter(n => !n.hidden) : [];
        if (this.selectedNodes) {
            const ix = this.selectedNodes.indexOf(this.node);
            this.isSelected = ix !== -1; // this node is the selected node or its ancestor
            this.isExpanded = this.isParentExpanded &&
                (this.isSelected || // expand if selected or ...
                    // preserve expanded state when display is wide; collapse in mobile.
                    (this.isWide && this.isExpanded));
        }
        else {
            this.isSelected = false;
        }
        this.setClasses();
    }
    setClasses() {
        this.classes = {
            ['level-' + this.level]: true,
            collapsed: !this.isExpanded,
            expanded: this.isExpanded,
            selected: this.isSelected
        };
    }
    headerClicked() {
        this.isExpanded = !this.isExpanded;
        this.setClasses();
    }
}
NavItemComponent.ɵfac = function NavItemComponent_Factory(t) { return new (t || NavItemComponent)(); };
NavItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavItemComponent, selectors: [["aio-nav-item"]], inputs: { isWide: "isWide", level: "level", node: "node", isParentExpanded: "isParentExpanded", selectedNodes: "selectedNodes" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "vertical-menu-item", 3, "href", "ngClass", "title"], ["class", "vertical-menu-item heading", 3, "href", "ngClass", "title", "click", 4, "ngIf"], ["type", "button", "class", "vertical-menu-item heading", 3, "ngClass", "title", "click", 4, "ngIf"], [1, "heading-children", 3, "ngClass"], [3, "level", "isWide", "isParentExpanded", "node", "selectedNodes", 4, "ngFor", "ngForOf"], [1, "vertical-menu-item", "heading", 3, "href", "ngClass", "title", "click"], ["svgIcon", "keyboard_arrow_right", 1, "rotating-icon"], ["type", "button", 1, "vertical-menu-item", "heading", 3, "ngClass", "title", "click"], [3, "level", "isWide", "isParentExpanded", "node", "selectedNodes"]], template: function NavItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NavItemComponent_div_0_Template, 4, 4, "div", 0);
        i0.ɵɵtemplate(1, NavItemComponent_div_1_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.node.children);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.node.children);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, i2.MatIcon, NavItemComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavItemComponent, [{
        type: Component,
        args: [{
                selector: 'aio-nav-item',
                templateUrl: 'nav-item.component.html',
            }]
    }], null, { isWide: [{
            type: Input
        }], level: [{
            type: Input
        }], node: [{
            type: Input
        }], isParentExpanded: [{
            type: Input
        }], selectedNodes: [{
            type: Input
        }] }); })();
//# sourceMappingURL=nav-item.component.js.map