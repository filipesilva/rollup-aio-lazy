import { animate, state, style, trigger, transition } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Inject, Input, Output } from '@angular/core';
import { CurrentDateToken } from 'app/shared/current-date';
import { WindowToken } from 'app/shared/window';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
const _c0 = ["*"];
const LOCAL_STORAGE_NAMESPACE = 'aio-notification/';
export class NotificationComponent {
    constructor(window, currentDate) {
        this.window = window;
        this.currentDate = currentDate;
        this.dismissed = new EventEmitter();
    }
    get localStorage() { return this.window.localStorage; }
    ngOnInit() {
        const previouslyHidden = this.localStorage.getItem(LOCAL_STORAGE_NAMESPACE + this.notificationId) === 'hide';
        const expired = this.currentDate > new Date(this.expirationDate);
        this.showNotification = previouslyHidden || expired ? 'hide' : 'show';
    }
    contentClick() {
        if (this.dismissOnContentClick) {
            this.dismiss();
        }
    }
    dismiss() {
        this.localStorage.setItem(LOCAL_STORAGE_NAMESPACE + this.notificationId, 'hide');
        this.showNotification = 'hide';
        this.dismissed.next();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(i0.ɵɵdirectiveInject(WindowToken), i0.ɵɵdirectiveInject(CurrentDateToken)); };
NotificationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotificationComponent, selectors: [["aio-notification"]], hostVars: 1, hostBindings: function NotificationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵupdateSyntheticHostBinding("@hideAnimation", ctx.showNotification);
    } }, inputs: { dismissOnContentClick: "dismissOnContentClick", notificationId: "notificationId", expirationDate: "expirationDate" }, outputs: { dismissed: "dismissed" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "content", 3, "click", "keyup.enter"], ["mat-icon-button", "", "aria-label", "Close", 1, "close-button", 3, "click"], ["svgIcon", "close", "aria-label", "Dismiss notification"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function NotificationComponent_Template_span_click_0_listener($event) { return ctx.contentClick(); })("keyup.enter", function NotificationComponent_Template_span_keyup_enter_0_listener($event) { return ctx.contentClick(); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("click", function NotificationComponent_Template_button_click_2_listener($event) { return ctx.dismiss(); });
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton, i2.MatIcon], encapsulation: 2, data: { animation: [
            trigger('hideAnimation', [
                state('show', style({ height: '*' })),
                state('hide', style({ height: 0 })),
                // this should be kept in sync with the animation durations in:
                // - aio/src/styles/2-modules/_notification.scss
                // - aio/src/app/app.component.ts : notificationDismissed()
                transition('show => hide', animate(250))
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotificationComponent, [{
        type: Component,
        args: [{
                selector: 'aio-notification',
                templateUrl: 'notification.component.html',
                animations: [
                    trigger('hideAnimation', [
                        state('show', style({ height: '*' })),
                        state('hide', style({ height: 0 })),
                        // this should be kept in sync with the animation durations in:
                        // - aio/src/styles/2-modules/_notification.scss
                        // - aio/src/app/app.component.ts : notificationDismissed()
                        transition('show => hide', animate(250))
                    ])
                ]
            }]
    }], function () { return [{ type: Window, decorators: [{
                type: Inject,
                args: [WindowToken]
            }] }, { type: Date, decorators: [{
                type: Inject,
                args: [CurrentDateToken]
            }] }]; }, { dismissOnContentClick: [{
            type: Input
        }], notificationId: [{
            type: Input
        }], expirationDate: [{
            type: Input
        }], dismissed: [{
            type: Output
        }], showNotification: [{
            type: HostBinding,
            args: ['@hideAnimation']
        }] }); })();
//# sourceMappingURL=notification.component.js.map