import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContributorListComponent } from './contributor-list.component';
import { ContributorService } from './contributor.service';
import { ContributorComponent } from './contributor.component';
import * as i0 from "@angular/core";
export class ContributorListModule {
    constructor() {
        this.customElementComponent = ContributorListComponent;
    }
}
ContributorListModule.ɵmod = i0.ɵɵdefineNgModule({ type: ContributorListModule });
ContributorListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ContributorListModule_Factory(t) { return new (t || ContributorListModule)(); }, providers: [ContributorService], imports: [[CommonModule, MatIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContributorListModule, { declarations: [ContributorListComponent, ContributorComponent], imports: [CommonModule, MatIconModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContributorListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatIconModule],
                declarations: [ContributorListComponent, ContributorComponent],
                entryComponents: [ContributorListComponent],
                providers: [ContributorService]
            }]
    }], null, null); })();
//# sourceMappingURL=contributor-list.module.js.map