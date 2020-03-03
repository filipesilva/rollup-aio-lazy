import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ModeBannerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "This is the ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Please visit ");
    i0.ɵɵelementStart(6, "a", 2);
    i0.ɵɵtext(7, "angular.io");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " to see documentation for the current version of Angular.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("archived documentation for Angular v", ctx_r125.version == null ? null : ctx_r125.version.major, ".");
} }
export class ModeBannerComponent {
}
ModeBannerComponent.ɵfac = function ModeBannerComponent_Factory(t) { return new (t || ModeBannerComponent)(); };
ModeBannerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModeBannerComponent, selectors: [["aio-mode-banner"]], inputs: { mode: "mode", version: "version" }, decls: 1, vars: 1, consts: [["class", "mode-banner alert archive-warning", 4, "ngIf"], [1, "mode-banner", "alert", "archive-warning"], ["href", "https://angular.io/"]], template: function ModeBannerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ModeBannerComponent_div_0_Template, 9, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.mode == "archive");
    } }, directives: [i1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModeBannerComponent, [{
        type: Component,
        args: [{
                selector: 'aio-mode-banner',
                template: `
  <div *ngIf="mode == 'archive'" class="mode-banner alert archive-warning">
    <p>This is the <strong>archived documentation for Angular v{{version?.major}}.</strong>
    Please visit <a href="https://angular.io/">angular.io</a> to see documentation for the current version of Angular.</p>
  </div>
  `
            }]
    }], null, { mode: [{
            type: Input
        }], version: [{
            type: Input
        }] }); })();
//# sourceMappingURL=mode-banner.component.js.map