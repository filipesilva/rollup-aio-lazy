import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./elements-loader";
import * as i2 from "app/shared/logger.service";
export class LazyCustomElementComponent {
    constructor(elementRef, elementsLoader, logger) {
        this.elementRef = elementRef;
        this.elementsLoader = elementsLoader;
        this.logger = logger;
        this.selector = '';
    }
    ngOnInit() {
        if (!this.selector || /[^\w-]/.test(this.selector)) {
            this.logger.error(new Error(`Invalid selector for 'aio-lazy-ce': ${this.selector}`));
            return;
        }
        this.elementRef.nativeElement.innerHTML = `<${this.selector}></${this.selector}>`;
        this.elementsLoader.loadCustomElement(this.selector);
    }
}
LazyCustomElementComponent.ɵfac = function LazyCustomElementComponent_Factory(t) { return new (t || LazyCustomElementComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ElementsLoader), i0.ɵɵdirectiveInject(i2.Logger)); };
LazyCustomElementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LazyCustomElementComponent, selectors: [["aio-lazy-ce"]], inputs: { selector: "selector" }, decls: 0, vars: 0, template: function LazyCustomElementComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LazyCustomElementComponent, [{
        type: Component,
        args: [{
                selector: 'aio-lazy-ce',
                template: '',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ElementsLoader }, { type: i2.Logger }]; }, { selector: [{
            type: Input
        }] }); })();
//# sourceMappingURL=lazy-custom-element.component.js.map