import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FileNotFoundSearchComponent } from './file-not-found-search.component';
import * as i0 from "@angular/core";
export class FileNotFoundSearchModule {
    constructor() {
        this.customElementComponent = FileNotFoundSearchComponent;
    }
}
FileNotFoundSearchModule.ɵmod = i0.ɵɵdefineNgModule({ type: FileNotFoundSearchModule });
FileNotFoundSearchModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FileNotFoundSearchModule_Factory(t) { return new (t || FileNotFoundSearchModule)(); }, imports: [[CommonModule, SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FileNotFoundSearchModule, { declarations: [FileNotFoundSearchComponent], imports: [CommonModule, SharedModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FileNotFoundSearchModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule],
                declarations: [FileNotFoundSearchComponent],
                entryComponents: [FileNotFoundSearchComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=file-not-found-search.module.js.map