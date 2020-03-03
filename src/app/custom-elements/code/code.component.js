import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "./pretty-printer.service";
import * as i3 from "app/shared/copier.service";
import * as i4 from "app/shared/logger.service";
import * as i5 from "@angular/common";
const _c0 = ["codeContainer"];
function CodeComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function CodeComponent_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r108 = i0.ɵɵnextContext(); return ctx_r108.doCopy(); });
    i0.ɵɵtext(1, "\n        ");
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3, "content_copy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "\n      ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r106 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r106.ariaLabel);
} }
/**
 * Formatted Code Block
 *
 * Pretty renders a code block, used in the docs and API reference by the code-example and
 * code-tabs embedded components.
 * It includes a "copy" button that will send the content to the clipboard when clicked
 *
 * Example usage:
 *
 * ```
 * <aio-code
 *   [language]="ts"
 *   [linenums]="true"
 *   [path]="router/src/app/app.module.ts"
 *   [region]="animations-module">
 * </aio-code>
 * ```
 *
 *
 * Renders code provided through the `updateCode` method.
 */
export class CodeComponent {
    constructor(snackbar, pretty, copier, logger) {
        this.snackbar = snackbar;
        this.pretty = pretty;
        this.copier = copier;
        this.logger = logger;
        this.ariaLabel = '';
        this.codeFormatted = new EventEmitter();
    }
    /** Code that should be formatted with current inputs and displayed in the view. */
    set code(code) {
        this._code = code;
        if (!this._code || !this._code.trim()) {
            this.showMissingCodeMessage();
        }
        else {
            this.formatDisplayedCode();
        }
    }
    get code() { return this._code; }
    /** Optional header to be displayed above the code. */
    set header(header) {
        this._header = header;
        this.ariaLabel = this.header ? `Copy code snippet from ${this.header}` : '';
    }
    get header() { return this._header; }
    ngOnChanges() {
        // If some inputs have changed and there is code displayed, update the view with the latest
        // formatted code.
        if (this.code) {
            this.formatDisplayedCode();
        }
    }
    formatDisplayedCode() {
        const leftAlignedCode = leftAlign(this.code);
        this.setCodeHtml(leftAlignedCode); // start with unformatted code
        this.codeText = this.getCodeText(); // store the unformatted code as text (for copying)
        this.pretty
            .formatCode(leftAlignedCode, this.language, this.getLinenums())
            .pipe(tap(() => this.codeFormatted.emit()))
            .subscribe(c => this.setCodeHtml(c), () => { });
    }
    /** Sets the message showing that the code could not be found. */
    showMissingCodeMessage() {
        const src = this.path ? this.path + (this.region ? '#' + this.region : '') : '';
        const srcMsg = src ? ` for\n${src}` : '.';
        this.setCodeHtml(`<p class="code-missing">The code sample is missing${srcMsg}</p>`);
    }
    /** Sets the innerHTML of the code container to the provided code string. */
    setCodeHtml(formattedCode) {
        // **Security:** Code example content is provided by docs authors and as such its considered to
        // be safe for innerHTML purposes.
        this.codeContainer.nativeElement.innerHTML = formattedCode;
    }
    /** Gets the textContent of the displayed code element. */
    getCodeText() {
        // `prettify` may remove newlines, e.g. when `linenums` are on. Retrieve the content of the
        // container as text, before prettifying it.
        // We take the textContent because we don't want it to be HTML encoded.
        return this.codeContainer.nativeElement.textContent;
    }
    /** Copies the code snippet to the user's clipboard. */
    doCopy() {
        const code = this.codeText;
        const successfullyCopied = this.copier.copyText(code);
        if (successfullyCopied) {
            this.logger.log('Copied code to clipboard:', code);
            this.snackbar.open('Code Copied', '', { duration: 800 });
        }
        else {
            this.logger.error(new Error(`ERROR copying code to clipboard: "${code}"`));
            this.snackbar.open('Copy failed. Please try again!', '', { duration: 800 });
        }
    }
    /** Gets the calculated value of linenums (boolean/number). */
    getLinenums() {
        const linenums = typeof this.linenums === 'boolean' ? this.linenums :
            this.linenums === 'true' ? true :
                this.linenums === 'false' ? false :
                    typeof this.linenums === 'string' ? parseInt(this.linenums, 10) :
                        this.linenums;
        return (linenums != null) && !isNaN(linenums) && linenums;
    }
}
CodeComponent.ɵfac = function CodeComponent_Factory(t) { return new (t || CodeComponent)(i0.ɵɵdirectiveInject(i1.MatSnackBar), i0.ɵɵdirectiveInject(i2.PrettyPrinter), i0.ɵɵdirectiveInject(i3.CopierService), i0.ɵɵdirectiveInject(i4.Logger)); };
CodeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CodeComponent, selectors: [["aio-code"]], viewQuery: function CodeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.codeContainer = _t.first);
    } }, inputs: { hideCopy: "hideCopy", language: "language", linenums: "linenums", path: "path", region: "region", header: "header" }, outputs: { codeFormatted: "codeFormatted" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 4, consts: [["class", "material-icons copy-button no-print", "title", "Copy code snippet", 3, "click", 4, "ngIf"], [1, "animated", "fadeIn"], ["codeContainer", ""], ["title", "Copy code snippet", 1, "material-icons", "copy-button", "no-print", 3, "click"], ["aria-hidden", "true"]], template: function CodeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "pre");
        i0.ɵɵtext(1, "      ");
        i0.ɵɵtemplate(2, CodeComponent_button_2_Template, 5, 1, "button", 0);
        i0.ɵɵtext(3, "\n      ");
        i0.ɵɵelement(4, "code", 1, 2);
        i0.ɵɵtext(6, "\n    ");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("prettyprint lang-", ctx.language, "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hideCopy);
    } }, directives: [i5.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CodeComponent, [{
        type: Component,
        args: [{
                selector: 'aio-code',
                template: `
    <pre class="prettyprint lang-{{language}}">
      <button *ngIf="!hideCopy" class="material-icons copy-button no-print"
        title="Copy code snippet"
        [attr.aria-label]="ariaLabel"
        (click)="doCopy()">
        <span aria-hidden="true">content_copy</span>
      </button>
      <code class="animated fadeIn" #codeContainer></code>
    </pre>
    `
            }]
    }], function () { return [{ type: i1.MatSnackBar }, { type: i2.PrettyPrinter }, { type: i3.CopierService }, { type: i4.Logger }]; }, { hideCopy: [{
            type: Input
        }], language: [{
            type: Input
        }], linenums: [{
            type: Input
        }], path: [{
            type: Input
        }], region: [{
            type: Input
        }], header: [{
            type: Input
        }], codeFormatted: [{
            type: Output
        }], codeContainer: [{
            type: ViewChild,
            args: ['codeContainer', { static: true }]
        }] }); })();
function leftAlign(text) {
    let indent = Number.MAX_VALUE;
    const lines = text.split('\n');
    lines.forEach(line => {
        const lineIndent = line.search(/\S/);
        if (lineIndent !== -1) {
            indent = Math.min(lineIndent, indent);
        }
    });
    return lines.map(line => line.substr(indent)).join('\n').trim();
}
//# sourceMappingURL=code.component.js.map