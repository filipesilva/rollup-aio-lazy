import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PrettyPrinter } from './pretty-printer.service';
import { CopierService } from 'app/shared/copier.service';
import * as i0 from "@angular/core";
export class CodeModule {
}
CodeModule.ɵmod = i0.ɵɵdefineNgModule({ type: CodeModule });
CodeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CodeModule_Factory(t) { return new (t || CodeModule)(); }, providers: [PrettyPrinter, CopierService], imports: [[CommonModule, MatSnackBarModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CodeModule, { declarations: [CodeComponent], imports: [CommonModule, MatSnackBarModule], exports: [CodeComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CodeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatSnackBarModule],
                declarations: [CodeComponent],
                entryComponents: [CodeComponent],
                exports: [CodeComponent],
                providers: [PrettyPrinter, CopierService]
            }]
    }], null, null); })();
//# sourceMappingURL=code.module.js.map