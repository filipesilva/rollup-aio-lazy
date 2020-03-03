import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SelectComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("symbol ", ctx_r41.selected == null ? null : ctx_r41.selected.value, "");
} }
function SelectComponent_ul_8_li_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} if (rf & 2) {
    const option_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("symbol ", option_r44.value, "");
} }
function SelectComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵlistener("click", function SelectComponent_ul_8_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r49); const option_r44 = ctx.$implicit; const i_r45 = ctx.index; const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.select(option_r44, i_r45); })("keydown.enter", function SelectComponent_ul_8_li_1_Template_li_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r49); const option_r44 = ctx.$implicit; const i_r45 = ctx.index; const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.select(option_r44, i_r45); })("keydown.space", function SelectComponent_ul_8_li_1_Template_li_keydown_space_0_listener($event) { i0.ɵɵrestoreView(_r49); const option_r44 = ctx.$implicit; const i_r45 = ctx.index; const ctx_r51 = i0.ɵɵnextContext(2); ctx_r51.select(option_r44, i_r45); return $event.preventDefault(); });
    i0.ɵɵtemplate(1, SelectComponent_ul_8_li_1_span_1_Template, 1, 3, "span", 2);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r44 = ctx.$implicit;
    const ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("selected", option_r44 === ctx_r43.selected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r43.showSymbol);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r44.title);
} }
function SelectComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵtemplate(1, SelectComponent_ul_8_li_1_Template, 4, 4, "li", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r42.options);
} }
export class SelectComponent {
    constructor(hostElement) {
        this.hostElement = hostElement;
        // tslint:disable-next-line: no-output-native
        this.change = new EventEmitter();
        this.showSymbol = false;
        this.showOptions = false;
    }
    ngOnInit() {
        this.label = this.label || '';
    }
    toggleOptions() {
        this.showOptions = !this.showOptions;
    }
    hideOptions() {
        this.showOptions = false;
    }
    select(option, index) {
        this.selected = option;
        this.change.emit({ option, index });
        this.hideOptions();
    }
    onClick(eventTarget) {
        // Hide the options if we clicked outside the component
        if (!this.hostElement.nativeElement.contains(eventTarget)) {
            this.hideOptions();
        }
    }
    onKeyDown() {
        this.hideOptions();
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["aio-select"]], hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function SelectComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument)("keydown.escape", function SelectComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeyDown(); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { selected: "selected", options: "options", showSymbol: "showSymbol", label: "label", disabled: "disabled" }, outputs: { change: "change" }, decls: 9, vars: 5, consts: [[1, "form-select-menu"], [1, "form-select-button", 3, "disabled", "click"], [3, "class", 4, "ngIf"], ["class", "form-select-dropdown", 4, "ngIf"], [1, "form-select-dropdown"], ["role", "button", "tabindex", "0", 3, "selected", "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function SelectComponent_Template_button_click_1_listener($event) { return ctx.toggleOptions(); });
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵelementStart(3, "strong");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SelectComponent_span_5_Template, 1, 3, "span", 2);
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectComponent_ul_8_Template, 2, 1, "ul", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.disabled);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSymbol);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.selected == null ? null : ctx.selected.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showOptions);
    } }, directives: [i1.NgIf, i1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                selector: 'aio-select',
                templateUrl: 'select.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { selected: [{
            type: Input
        }], options: [{
            type: Input
        }], change: [{
            type: Output
        }], showSymbol: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }], onKeyDown: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
//# sourceMappingURL=select.component.js.map