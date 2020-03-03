import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TocComponent } from './toc.component';
import * as i0 from "@angular/core";
export class TocModule {
    constructor() {
        this.customElementComponent = TocComponent;
    }
}
TocModule.ɵmod = i0.ɵɵdefineNgModule({ type: TocModule });
TocModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TocModule_Factory(t) { return new (t || TocModule)(); }, imports: [[CommonModule, MatIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TocModule, { declarations: [TocComponent], imports: [CommonModule, MatIconModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TocModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatIconModule],
                declarations: [TocComponent],
                entryComponents: [TocComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=toc.module.js.map