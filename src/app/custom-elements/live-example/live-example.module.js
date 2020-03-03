import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddedStackblitzComponent, LiveExampleComponent } from './live-example.component';
import * as i0 from "@angular/core";
export class LiveExampleModule {
    constructor() {
        this.customElementComponent = LiveExampleComponent;
    }
}
LiveExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: LiveExampleModule });
LiveExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LiveExampleModule_Factory(t) { return new (t || LiveExampleModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LiveExampleModule, { declarations: [LiveExampleComponent, EmbeddedStackblitzComponent], imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LiveExampleModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [LiveExampleComponent, EmbeddedStackblitzComponent],
                entryComponents: [LiveExampleComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=live-example.module.js.map