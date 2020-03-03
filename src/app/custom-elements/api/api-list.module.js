import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ApiListComponent } from './api-list.component';
import { ApiService } from './api.service';
import * as i0 from "@angular/core";
export class ApiListModule {
    constructor() {
        this.customElementComponent = ApiListComponent;
    }
}
ApiListModule.ɵmod = i0.ɵɵdefineNgModule({ type: ApiListModule });
ApiListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ApiListModule_Factory(t) { return new (t || ApiListModule)(); }, providers: [ApiService], imports: [[CommonModule, SharedModule, HttpClientModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ApiListModule, { declarations: [ApiListComponent], imports: [CommonModule, SharedModule, HttpClientModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ApiListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, HttpClientModule],
                declarations: [ApiListComponent],
                entryComponents: [ApiListComponent],
                providers: [ApiService]
            }]
    }], null, null); })();
//# sourceMappingURL=api-list.module.js.map