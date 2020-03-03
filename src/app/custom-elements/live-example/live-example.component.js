/* tslint:disable component-selector */
import { Component, Input, ViewChild } from '@angular/core';
import { CONTENT_URL_PREFIX } from 'app/documents/document.service';
import { boolFromValue, getAttrs, getAttrValue } from 'app/shared/attribute-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["content"];
function LiveExampleComponent_span_4_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " You can also ");
    i0.ɵɵelementStart(2, "a", 8);
    i0.ɵɵtext(3, "download this example");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ". ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r121 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r121.zip, i0.ɵɵsanitizeUrl);
} }
function LiveExampleComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelement(2, "aio-embedded-stackblitz", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, LiveExampleComponent_span_4_p_3_Template, 5, 1, "p", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r118 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r118.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r118.stackblitz);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r118.enableDownload);
} }
function LiveExampleComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r119 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r119.title);
    i0.ɵɵproperty("href", ctx_r119.zip, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r119.title);
} }
function LiveExampleComponent_span_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " / ");
    i0.ɵɵelementStart(2, "a", 8);
    i0.ɵɵtext(3, "download example");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r122 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r122.zip, i0.ɵɵsanitizeUrl);
} }
function LiveExampleComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "a", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, LiveExampleComponent_span_6_span_3_Template, 4, 1, "span", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r120 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r120.title);
    i0.ɵɵproperty("href", ctx_r120.stackblitz, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r120.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.enableDownload);
} }
const _c1 = ["*"];
const _c2 = ["iframe"];
const LIVE_EXAMPLE_BASE = CONTENT_URL_PREFIX + 'live-examples/';
const ZIP_BASE = CONTENT_URL_PREFIX + 'zips/';
/**
 * Angular.io Live Example Embedded Component
 *
 * Renders a link to a live/host example of the doc page.
 *
 * All attributes and the text content are optional
 *
 * Usage:
 *   <live-example
 *      [name="..."]        // name of the example directory
 *      [stackblitz="...""] // name of the stackblitz file (becomes part of zip file name as well)
 *      [embedded]          // embed the stackblitz in the doc page, else display in new browser tab (default)
 *      [noDownload]        // no downloadable zip option
 *      [downloadOnly]      // just the zip
 *      [title="..."]>      // text for live example link and tooltip
 *        text              // higher precedence way to specify text for live example link and tooltip
 *  </live-example>
 * Example:
 *   <p>Run <live-example>Try the live example</live-example></p>.
 *   // ~/resources/live-examples/{page}/stackblitz.json
 *
 *   <p>Run <live-example name="toh-pt1">this example</live-example></p>.
 *   // ~/resources/live-examples/toh-pt1/stackblitz.json
 *
 *   // Link to the default stackblitz in the toh-pt1 sample
 *   // The title overrides default ("live example") with "Tour of Heroes - Part 1"
 *   <p>Run <live-example name="toh-pt1" title="Tour of Heroes - Part 1"></live-example></p>.
 *   // ~/resources/live-examples/toh-pt1/stackblitz.json
 *
 *   <p>Run <live-example stackblitz="minimal"></live-example></p>.
 *   // ~/resources/live-examples/{page}/minimal.stackblitz.json
 *
 *   // Embed the current page's default stackblitz
 *   // Text within tag is "live example"
 *   // No title (no tooltip)
 *   <live-example embedded title=""></live-example>
 *   // ~/resources/live-examples/{page}/stackblitz.json
 *
 *   // Displays within the document page as an embedded style stackblitz editor
 *   <live-example name="toh-pt1" embedded stackblitz="minimal">Tour of Heroes - Part 1</live-example>
 *   // ~/resources/live-examples/toh-pt1/minimal.stackblitz.json
 */
export class LiveExampleComponent {
    constructor(elementRef, location) {
        const attrs = getAttrs(elementRef);
        const exampleDir = this.getExampleDir(attrs, location.path(false));
        const stackblitzName = this.getStackblitzName(attrs);
        this.mode = this.getMode(attrs);
        this.enableDownload = this.getEnableDownload(attrs);
        this.stackblitz = this.getStackblitz(exampleDir, stackblitzName, this.mode === 'embedded');
        this.zip = this.getZip(exampleDir, stackblitzName);
        this.title = this.getTitle(attrs);
    }
    ngAfterContentInit() {
        // Angular will sanitize this title when displayed, so it should be plain text.
        const textContent = this.content.nativeElement.textContent.trim();
        if (textContent) {
            this.title = textContent;
        }
    }
    getEnableDownload(attrs) {
        const downloadDisabled = boolFromValue(getAttrValue(attrs, 'noDownload'));
        return !downloadDisabled;
    }
    getExampleDir(attrs, path) {
        let exampleDir = getAttrValue(attrs, 'name');
        if (!exampleDir) {
            // Take the last path segment, excluding query params and hash fragment.
            const match = path.match(/[^/?#]+(?=\/?(?:\?|#|$))/);
            exampleDir = match ? match[0] : 'index';
        }
        return exampleDir.trim();
    }
    getMode(attrs) {
        const downloadOnly = boolFromValue(getAttrValue(attrs, 'downloadOnly'));
        const isEmbedded = boolFromValue(getAttrValue(attrs, 'embedded'));
        return downloadOnly ? 'downloadOnly'
            : isEmbedded ? 'embedded' :
                'default';
    }
    getStackblitz(exampleDir, stackblitzName, isEmbedded) {
        const urlQuery = isEmbedded ? '?ctl=1' : '';
        return `${LIVE_EXAMPLE_BASE}${exampleDir}/${stackblitzName}stackblitz.html${urlQuery}`;
    }
    getStackblitzName(attrs) {
        const attrValue = (getAttrValue(attrs, 'stackblitz') || '').trim();
        return attrValue && `${attrValue}.`;
    }
    getTitle(attrs) {
        return (getAttrValue(attrs, 'title') || 'live example').trim();
    }
    getZip(exampleDir, stackblitzName) {
        const zipName = exampleDir.split('/')[0];
        return `${ZIP_BASE}${exampleDir}/${stackblitzName}${zipName}.zip`;
    }
}
LiveExampleComponent.ɵfac = function LiveExampleComponent_Factory(t) { return new (t || LiveExampleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Location)); };
LiveExampleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LiveExampleComponent, selectors: [["live-example"]], viewQuery: function LiveExampleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, ngContentSelectors: _c1, decls: 7, vars: 3, consts: [[2, "display", "none"], ["content", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "title"], [3, "src"], [4, "ngIf"], ["download", "", "title", "Download example", 3, "href"], ["download", "", 3, "href", "title"], ["target", "_blank", 3, "href", "title"]], template: function LiveExampleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "span", 0, 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵtemplate(4, LiveExampleComponent_span_4_Template, 4, 3, "span", 3);
        i0.ɵɵtemplate(5, LiveExampleComponent_span_5_Template, 3, 3, "span", 3);
        i0.ɵɵtemplate(6, LiveExampleComponent_span_6_Template, 4, 4, "span", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngSwitch", ctx.mode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "embedded");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "downloadOnly");
    } }, directives: function () { return [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, EmbeddedStackblitzComponent, i1.NgIf]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LiveExampleComponent, [{
        type: Component,
        args: [{
                selector: 'live-example',
                templateUrl: 'live-example.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Location }]; }, { content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }] }); })();
///// EmbeddedStackblitzComponent ///
/**
 * Hides the <iframe> so we can test LiveExampleComponent without actually triggering
 * a call to stackblitz to load the iframe
 */
export class EmbeddedStackblitzComponent {
    ngAfterViewInit() {
        // DEVELOPMENT TESTING ONLY
        // this.src = 'https://angular.io/resources/live-examples/quickstart/ts/stackblitz.json';
        if (this.iframe) {
            // security: the `src` is always authored by the documentation team
            // and is considered to be safe
            this.iframe.nativeElement.src = this.src;
        }
    }
}
EmbeddedStackblitzComponent.ɵfac = function EmbeddedStackblitzComponent_Factory(t) { return new (t || EmbeddedStackblitzComponent)(); };
EmbeddedStackblitzComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmbeddedStackblitzComponent, selectors: [["aio-embedded-stackblitz"]], viewQuery: function EmbeddedStackblitzComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iframe = _t.first);
    } }, inputs: { src: "src" }, decls: 2, vars: 0, consts: [["frameborder", "0", "width", "100%", "height", "100%"], ["iframe", ""]], template: function EmbeddedStackblitzComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "iframe", 0, 1);
    } }, styles: ["iframe[_ngcontent-%COMP%] { min-height: 400px; }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmbeddedStackblitzComponent, [{
        type: Component,
        args: [{
                selector: 'aio-embedded-stackblitz',
                template: `<iframe #iframe frameborder="0" width="100%" height="100%"></iframe>`,
                styles: ['iframe { min-height: 400px; }']
            }]
    }], null, { src: [{
            type: Input
        }], iframe: [{
            type: ViewChild,
            args: ['iframe', { static: true }]
        }] }); })();
//# sourceMappingURL=live-example.component.js.map