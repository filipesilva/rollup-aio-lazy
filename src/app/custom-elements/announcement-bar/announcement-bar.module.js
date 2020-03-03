import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { AnnouncementBarComponent } from './announcement-bar.component';
import * as i0 from "@angular/core";
export class AnnouncementBarModule {
    constructor() {
        this.customElementComponent = AnnouncementBarComponent;
    }
}
AnnouncementBarModule.ɵmod = i0.ɵɵdefineNgModule({ type: AnnouncementBarModule });
AnnouncementBarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AnnouncementBarModule_Factory(t) { return new (t || AnnouncementBarModule)(); }, imports: [[CommonModule, SharedModule, HttpClientModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AnnouncementBarModule, { declarations: [AnnouncementBarComponent], imports: [CommonModule, SharedModule, HttpClientModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, HttpClientModule],
                declarations: [AnnouncementBarComponent],
                entryComponents: [AnnouncementBarComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=announcement-bar.module.js.map