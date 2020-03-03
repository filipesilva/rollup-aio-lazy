/* tslint:disable component-selector */
import { Component, HostBinding, ViewChild, Input } from '@angular/core';
import { CodeComponent } from './code.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./code.component";
const _c0 = ["content"];
function CodeExampleComponent_header_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r111 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r111.header);
} }
const _c1 = ["*"];
/**
 * An embeddable code block that displays nicely formatted code.
 * Example usage:
 *
 * ```
 * <code-example language="ts" linenums="2" class="special" header="Do Stuff">
 * // a code block
 * console.log('do stuff');
 * </code-example>
 * ```
 */
export class CodeExampleComponent {
    constructor() {
        this._path = '';
        this.isAvoid = false;
    }
    set header(header) {
        this._header = header;
        this.classes = {
            'headed-code': !!this.header,
            'simple-code': !this.header,
        };
    }
    get header() { return this._header; }
    set path(path) {
        this._path = path;
        this.isAvoid = this.path.indexOf('.avoid.') !== -1;
    }
    get path() { return this._path; }
    set hidecopy(hidecopy) {
        // Coerce the boolean value.
        this._hidecopy = hidecopy != null && `${hidecopy}` !== 'false';
    }
    get hidecopy() { return this._hidecopy; }
    set hyphenatedHideCopy(hidecopy) {
        this.hidecopy = hidecopy;
    }
    set capitalizedHideCopy(hidecopy) {
        this.hidecopy = hidecopy;
    }
    ngAfterViewInit() {
        this.aioCode.code = this.content.nativeElement.innerHTML;
    }
}
CodeExampleComponent.ɵfac = function CodeExampleComponent_Factory(t) { return new (t || CodeExampleComponent)(); };
CodeExampleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CodeExampleComponent, selectors: [["code-example"]], viewQuery: function CodeExampleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(CodeComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.aioCode = _t.first);
    } }, hostVars: 2, hostBindings: function CodeExampleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("avoidFile", ctx.isAvoid);
    } }, inputs: { language: "language", linenums: "linenums", region: "region", header: "header", path: "path", hidecopy: "hidecopy", hyphenatedHideCopy: ["hide-copy", "hyphenatedHideCopy"], capitalizedHideCopy: ["hideCopy", "capitalizedHideCopy"] }, ngContentSelectors: _c1, decls: 5, vars: 8, consts: [[2, "display", "none"], ["content", ""], [4, "ngIf"], [3, "ngClass", "language", "linenums", "path", "region", "hideCopy", "header"]], template: function CodeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CodeExampleComponent_header_3_Template, 2, 1, "header", 2);
        i0.ɵɵelement(4, "aio-code", 3);
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.header);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.classes)("language", ctx.language)("linenums", ctx.linenums)("path", ctx.path)("region", ctx.region)("hideCopy", ctx.hidecopy)("header", ctx.header);
    } }, directives: [i1.NgIf, i2.CodeComponent, i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CodeExampleComponent, [{
        type: Component,
        args: [{
                selector: 'code-example',
                template: `
    <!-- Content projection is used to get the content HTML provided to this component -->
    <div #content style="display: none"><ng-content></ng-content></div>

    <header *ngIf="header">{{header}}</header>

    <aio-code [ngClass]="classes"
              [language]="language"
              [linenums]="linenums"
              [path]="path"
              [region]="region"
              [hideCopy]="hidecopy"
              [header]="header">
    </aio-code>
  `,
            }]
    }], null, { language: [{
            type: Input
        }], linenums: [{
            type: Input
        }], region: [{
            type: Input
        }], header: [{
            type: Input
        }], path: [{
            type: Input
        }], hidecopy: [{
            type: Input
        }], hyphenatedHideCopy: [{
            type: Input,
            args: ['hide-copy']
        }], capitalizedHideCopy: [{
            type: Input,
            args: ['hideCopy']
        }], isAvoid: [{
            type: HostBinding,
            args: ['class.avoidFile']
        }], content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }], aioCode: [{
            type: ViewChild,
            args: [CodeComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=code-example.component.js.map