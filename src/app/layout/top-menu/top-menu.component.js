import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TopMenuComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 2);
    i0.ɵɵelementStart(2, "span", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r127 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", node_r127.url, i0.ɵɵsanitizeUrl)("title", node_r127.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(node_r127.title);
} }
export class TopMenuComponent {
}
TopMenuComponent.ɵfac = function TopMenuComponent_Factory(t) { return new (t || TopMenuComponent)(); };
TopMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TopMenuComponent, selectors: [["aio-top-menu"]], inputs: { nodes: "nodes" }, decls: 2, vars: 1, consts: [["role", "navigation"], [4, "ngFor", "ngForOf"], [1, "nav-link", 3, "href", "title"], [1, "nav-link-inner"]], template: function TopMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, TopMenuComponent_li_1_Template, 4, 3, "li", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.nodes);
    } }, directives: [i1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TopMenuComponent, [{
        type: Component,
        args: [{
                selector: 'aio-top-menu',
                template: `
    <ul role="navigation">
      <li *ngFor="let node of nodes">
        <a class="nav-link" [href]="node.url" [title]="node.title">
          <span class="nav-link-inner">{{ node.title }}</span>
        </a>
      </li>
    </ul>`
            }]
    }], null, { nodes: [{
            type: Input
        }] }); })();
//# sourceMappingURL=top-menu.component.js.map