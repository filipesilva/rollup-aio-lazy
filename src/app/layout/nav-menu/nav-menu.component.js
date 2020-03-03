import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "app/layout/nav-item/nav-item.component";
function NavMenuComponent_aio_nav_item_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "aio-nav-item", 1);
} if (rf & 2) {
    const node_r133 = ctx.$implicit;
    const ctx_r132 = i0.ɵɵnextContext();
    i0.ɵɵproperty("node", node_r133)("selectedNodes", ctx_r132.currentNode == null ? null : ctx_r132.currentNode.nodes)("isWide", ctx_r132.isWide);
} }
export class NavMenuComponent {
    constructor() {
        this.isWide = false;
    }
    get filteredNodes() { return this.nodes ? this.nodes.filter(n => !n.hidden) : []; }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavMenuComponent, selectors: [["aio-nav-menu"]], inputs: { currentNode: "currentNode", isWide: "isWide", nodes: "nodes" }, decls: 1, vars: 1, consts: [[3, "node", "selectedNodes", "isWide", 4, "ngFor", "ngForOf"], [3, "node", "selectedNodes", "isWide"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NavMenuComponent_aio_nav_item_0_Template, 1, 3, "aio-nav-item", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.filteredNodes);
    } }, directives: [i1.NgForOf, i2.NavItemComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavMenuComponent, [{
        type: Component,
        args: [{
                selector: 'aio-nav-menu',
                template: `
  <aio-nav-item *ngFor="let node of filteredNodes" [node]="node" [selectedNodes]="currentNode?.nodes" [isWide]="isWide">
  </aio-nav-item>`
            }]
    }], null, { currentNode: [{
            type: Input
        }], isWide: [{
            type: Input
        }], nodes: [{
            type: Input
        }] }); })();
//# sourceMappingURL=nav-menu.component.js.map