import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from './code-example.component';
import { CodeModule } from './code.module';
import * as i0 from "@angular/core";
export class CodeExampleModule {
    constructor() {
        this.customElementComponent = CodeExampleComponent;
    }
}
CodeExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: CodeExampleModule });
CodeExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CodeExampleModule_Factory(t) { return new (t || CodeExampleModule)(); }, imports: [[CommonModule, CodeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CodeExampleModule, { declarations: [CodeExampleComponent], imports: [CommonModule, CodeModule], exports: [CodeExampleComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CodeExampleModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, CodeModule],
                declarations: [CodeExampleComponent],
                exports: [CodeExampleComponent],
                entryComponents: [CodeExampleComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=code-example.module.js.map