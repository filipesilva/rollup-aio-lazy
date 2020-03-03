import { Component, Input } from '@angular/core';
import { CONTENT_URL_PREFIX } from 'app/documents/document.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
function ContributorComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtext(1, " View Bio ");
    i0.ɵɵelementEnd();
} }
function ContributorComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function ContributorComponent_a_7_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r75); return $event.stopPropagation(); });
    i0.ɵɵelement(1, "mat-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("href", "https://twitter.com/", ctx_r71.person.twitter, "", i0.ɵɵsanitizeUrl);
} }
function ContributorComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function ContributorComponent_a_8_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r77); return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "mat-icon", 10);
    i0.ɵɵtext(2, "link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("href", ctx_r72.person.website, i0.ɵɵsanitizeUrl);
} }
function ContributorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function ContributorComponent_div_9_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.flipCard(ctx_r78.person); })("keyup.enter", function ContributorComponent_div_9_Template_div_keyup_enter_0_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.flipCard(ctx_r80.person); });
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 12);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r73.person.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r73.person.bio);
} }
const _c0 = function (a0) { return { "flipped": a0 }; };
export class ContributorComponent {
    constructor() {
        this.noPicture = '_no-one.png';
        this.pictureBase = CONTENT_URL_PREFIX + 'images/bios/';
    }
    flipCard(person) {
        person.isFlipped = !person.isFlipped;
    }
}
ContributorComponent.ɵfac = function ContributorComponent_Factory(t) { return new (t || ContributorComponent)(); };
ContributorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ContributorComponent, selectors: [["aio-contributor"]], inputs: { person: "person" }, decls: 10, vars: 10, consts: [[1, "contributor-card", 3, "ngClass"], [1, "card-front", 3, "click", "keyup.enter"], [1, "contributor-image"], [1, "contributor-info"], ["mat-button", "", "class", "info-item", 4, "ngIf"], ["mat-icon-button", "", "class", "info-item icon", "target", "_blank", 3, "href", "click", 4, "ngIf"], ["class", "card-back", 3, "click", "keyup.enter", 4, "ngIf"], ["mat-button", "", 1, "info-item"], ["mat-icon-button", "", "target", "_blank", 1, "info-item", "icon", 3, "href", "click"], ["svgIcon", "logos:twitter"], [1, "link-icon"], [1, "card-back", 3, "click", "keyup.enter"], [1, "contributor-bio"]], template: function ContributorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function ContributorComponent_Template_div_click_1_listener($event) { return ctx.flipCard(ctx.person); })("keyup.enter", function ContributorComponent_Template_div_keyup_enter_1_listener($event) { return ctx.flipCard(ctx.person); });
        i0.ɵɵelementStart(2, "h3");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtemplate(6, ContributorComponent_a_6_Template, 2, 0, "a", 4);
        i0.ɵɵtemplate(7, ContributorComponent_a_7_Template, 2, 1, "a", 5);
        i0.ɵɵtemplate(8, ContributorComponent_a_8_Template, 3, 1, "a", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, ContributorComponent_div_9_Template, 5, 2, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, ctx.person.isFlipped));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.person.name);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background-image", "url(" + ctx.pictureBase + (ctx.person.picture || ctx.noPicture) + ")", i0.ɵɵdefaultStyleSanitizer);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.person.bio);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.person.twitter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.person.website);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.person.isFlipped);
    } }, directives: [i1.NgClass, i1.NgIf, i2.MatIcon], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContributorComponent, [{
        type: Component,
        args: [{
                selector: 'aio-contributor',
                template: `
    <div [ngClass]="{ 'flipped': person.isFlipped }" class="contributor-card">

        <div class="card-front" (click)="flipCard(person)" (keyup.enter)="flipCard(person)">
            <h3>{{person.name}}</h3>

            <div class="contributor-image" [style.background-image]="'url('+pictureBase+(person.picture || noPicture)+')'">
                <div class="contributor-info">
                    <a *ngIf="person.bio" mat-button class="info-item">
                        View Bio
                    </a>
                    <a *ngIf="person.twitter" mat-icon-button class="info-item icon"
                        href="https://twitter.com/{{person.twitter}}" target="_blank" (click)="$event.stopPropagation()">
                        <mat-icon svgIcon="logos:twitter"></mat-icon>
                    </a>
                    <a *ngIf="person.website" mat-icon-button class="info-item icon"
                        href="{{person.website}}" target="_blank" (click)="$event.stopPropagation()">
                        <mat-icon class="link-icon">link</mat-icon>
                    </a>
                </div>
            </div>
        </div>

        <div class="card-back" *ngIf="person.isFlipped" (click)="flipCard(person)" (keyup.enter)="flipCard(person)">
            <h3>{{person.name}}</h3>
            <p class="contributor-bio">{{person.bio}}</p>
        </div>
    </div>
  `
            }]
    }], null, { person: [{
            type: Input
        }] }); })();
//# sourceMappingURL=contributor.component.js.map