/* tslint:disable component-selector */
import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { CodeComponent } from './code.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/tabs";
import * as i3 from "@angular/common";
import * as i4 from "./code.component";
const _c0 = ["content"];
function CodeTabsComponent_mat_tab_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r114 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap(tab_r114.class);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r114.header);
} }
function CodeTabsComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 4);
    i0.ɵɵtemplate(1, CodeTabsComponent_mat_tab_5_ng_template_1_Template, 2, 4, "ng-template", 5);
    i0.ɵɵelement(2, "aio-code", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r114 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(tab_r114.class);
    i0.ɵɵproperty("language", tab_r114.language)("linenums", tab_r114.linenums)("path", tab_r114.path)("region", tab_r114.region)("header", tab_r114.header);
} }
const _c1 = ["*"];
/**
 * Renders a set of tab group of code snippets.
 *
 * The innerHTML of the `<code-tabs>` component should contain `<code-pane>` elements.
 * Each `<code-pane>` has the same interface as the embedded `<code-example>` component.
 * The optional `linenums` attribute is the default `linenums` for each code pane.
 */
export class CodeTabsComponent {
    ngOnInit() {
        this.tabs = [];
        const codeExamples = Array.from(this.content.nativeElement.querySelectorAll('code-pane'));
        for (const tabContent of codeExamples) {
            this.tabs.push(this.getTabInfo(tabContent));
        }
    }
    ngAfterViewInit() {
        this.codeComponents.toArray().forEach((codeComponent, i) => {
            codeComponent.code = this.tabs[i].code;
        });
    }
    /** Gets the extracted TabInfo data from the provided code-pane element. */
    getTabInfo(tabContent) {
        return {
            class: tabContent.getAttribute('class') || '',
            code: tabContent.innerHTML,
            path: tabContent.getAttribute('path') || '',
            region: tabContent.getAttribute('region') || '',
            header: tabContent.getAttribute('header') || undefined,
            language: tabContent.getAttribute('language') || undefined,
            linenums: tabContent.getAttribute('linenums') || this.linenums,
        };
    }
}
CodeTabsComponent.ɵfac = function CodeTabsComponent_Factory(t) { return new (t || CodeTabsComponent)(); };
CodeTabsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CodeTabsComponent, selectors: [["code-tabs"]], viewQuery: function CodeTabsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵviewQuery(CodeComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.codeComponents = _t);
    } }, inputs: { linenums: "linenums" }, ngContentSelectors: _c1, decls: 6, vars: 2, consts: [[2, "display", "none"], ["content", ""], [1, "code-tab-group", 3, "disableRipple"], ["style", "overflow-y: hidden;", 4, "ngFor", "ngForOf"], [2, "overflow-y", "hidden"], ["mat-tab-label", ""], [3, "language", "linenums", "path", "region", "header"]], template: function CodeTabsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-card");
        i0.ɵɵelementStart(4, "mat-tab-group", 2);
        i0.ɵɵtemplate(5, CodeTabsComponent_mat_tab_5_Template, 3, 8, "mat-tab", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disableRipple", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [i1.MatCard, i2.MatTabGroup, i3.NgForOf, i2.MatTab, i2.MatTabLabel, i4.CodeComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CodeTabsComponent, [{
        type: Component,
        args: [{
                selector: 'code-tabs',
                template: `
    <!-- Use content projection so that the provided HTML's code-panes can be split into tabs -->
    <div #content style="display: none"><ng-content></ng-content></div>

    <mat-card>
      <mat-tab-group class="code-tab-group" [disableRipple]="true">
        <mat-tab style="overflow-y: hidden;" *ngFor="let tab of tabs">
          <ng-template mat-tab-label>
            <span class="{{ tab.class }}">{{ tab.header }}</span>
          </ng-template>
          <aio-code class="{{ tab.class }}"
                    [language]="tab.language"
                    [linenums]="tab.linenums"
                    [path]="tab.path"
                    [region]="tab.region"
                    [header]="tab.header">
          </aio-code>
        </mat-tab>
      </mat-tab-group>
    </mat-card>
  `,
            }]
    }], null, { linenums: [{
            type: Input
        }], content: [{
            type: ViewChild,
            args: ['content', { static: true }]
        }], codeComponents: [{
            type: ViewChildren,
            args: [CodeComponent]
        }] }); })();
//# sourceMappingURL=code-tabs.component.js.map