import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SelectComponent } from './select/select.component';
import * as i0 from "@angular/core";
export class SharedModule {
}
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [SearchResultsComponent,
        SelectComponent], imports: [CommonModule], exports: [SearchResultsComponent,
        SelectComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    SearchResultsComponent,
                    SelectComponent
                ],
                declarations: [
                    SearchResultsComponent,
                    SelectComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=shared.module.js.map