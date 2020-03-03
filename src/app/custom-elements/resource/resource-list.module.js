import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceListComponent } from './resource-list.component';
import { ResourceService } from './resource.service';
import * as i0 from "@angular/core";
export class ResourceListModule {
    constructor() {
        this.customElementComponent = ResourceListComponent;
    }
}
ResourceListModule.ɵmod = i0.ɵɵdefineNgModule({ type: ResourceListModule });
ResourceListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ResourceListModule_Factory(t) { return new (t || ResourceListModule)(); }, providers: [ResourceService], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ResourceListModule, { declarations: [ResourceListComponent], imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ResourceListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [ResourceListComponent],
                entryComponents: [ResourceListComponent],
                providers: [ResourceService]
            }]
    }], null, null); })();
//# sourceMappingURL=resource-list.module.js.map