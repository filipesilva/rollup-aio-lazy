import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FooterComponent_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r131 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", item_r131.url, i0.ɵɵsanitizeUrl)("title", item_r131.tooltip || item_r131.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r131.title);
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul");
    i0.ɵɵtemplate(4, FooterComponent_div_1_li_4_Template, 3, 3, "li", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r129 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(node_r129.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", node_r129.children);
} }
export class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["aio-footer"]], inputs: { nodes: "nodes", versionInfo: "versionInfo" }, decls: 12, vars: 2, consts: [[1, "grid-fluid"], ["class", "footer-block", 4, "ngFor", "ngForOf"], ["href", "license", "title", "License text"], ["href", "http://creativecommons.org/licenses/by/4.0/"], [1, "footer-block"], [4, "ngFor", "ngForOf"], [1, "link", 3, "href", "title"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FooterComponent_div_1_Template, 5, 2, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "p");
        i0.ɵɵtext(3, " Super-powered by Google \u00A92010-2020. Code licensed under an ");
        i0.ɵɵelementStart(4, "a", 2);
        i0.ɵɵtext(5, "MIT-style License");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(6, ". Documentation licensed under ");
        i0.ɵɵelementStart(7, "a", 3);
        i0.ɵɵtext(8, "CC BY 4.0");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(9, ".\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.nodes);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1(" Version ", ctx.versionInfo == null ? null : ctx.versionInfo.full, ".\n");
    } }, directives: [i1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'aio-footer',
                templateUrl: 'footer.component.html'
            }]
    }], null, { nodes: [{
            type: Input
        }], versionInfo: [{
            type: Input
        }] }); })();
//# sourceMappingURL=footer.component.js.map