import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeTabsComponent } from './code-tabs.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeModule } from './code.module';
import * as i0 from "@angular/core";
export class CodeTabsModule {
    constructor() {
        this.customElementComponent = CodeTabsComponent;
    }
}
CodeTabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: CodeTabsModule });
CodeTabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CodeTabsModule_Factory(t) { return new (t || CodeTabsModule)(); }, imports: [[CommonModule, MatCardModule, MatTabsModule, CodeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CodeTabsModule, { declarations: [CodeTabsComponent], imports: [CommonModule, MatCardModule, MatTabsModule, CodeModule], exports: [CodeTabsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CodeTabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatCardModule, MatTabsModule, CodeModule],
                declarations: [CodeTabsComponent],
                exports: [CodeTabsComponent],
                entryComponents: [CodeTabsComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=code-tabs.module.js.map