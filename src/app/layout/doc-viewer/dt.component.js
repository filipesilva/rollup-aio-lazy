import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["dt"];
export class DtComponent {
    constructor() {
        this.docChange = new EventEmitter();
    }
    get text() { return this.doc && this.doc.contents; }
    dtextSet() {
        this.doc.contents = this.dt.nativeElement.value;
        this.docChange.emit(Object.assign({}, this.doc));
    }
}
DtComponent.ɵfac = function DtComponent_Factory(t) { return new (t || DtComponent)(); };
DtComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DtComponent, selectors: [["aio-dt"]], viewQuery: function DtComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dt = _t.first);
    } }, inputs: { doc: "doc" }, outputs: { docChange: "docChange" }, decls: 7, vars: 1, consts: [["rows", "10", "cols", "80", 3, "value"], ["dt", ""], [3, "click"]], template: function DtComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "hr");
        i0.ɵɵelement(2, "textarea", 0, 1);
        i0.ɵɵelement(4, "br");
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function DtComponent_Template_button_click_5_listener($event) { return ctx.dtextSet(); });
        i0.ɵɵtext(6, "Show change");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.text);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DtComponent, [{
        type: Component,
        args: [{
                selector: 'aio-dt',
                template: `
    <div>
      <hr>
      <textarea #dt [value]="text" rows="10" cols="80"></textarea>
      <br/>
      <button (click)="dtextSet()">Show change</button>
    </div>
  `
            }]
    }], null, { doc: [{
            type: Input
        }], docChange: [{
            type: Output
        }], dt: [{
            type: ViewChild,
            args: ['dt', { read: ElementRef, static: true }]
        }] }); })();
//# sourceMappingURL=dt.component.js.map