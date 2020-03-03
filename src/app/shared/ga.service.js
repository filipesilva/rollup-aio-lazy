import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WindowToken } from 'app/shared/window';
import * as i0 from "@angular/core";
/**
 * Google Analytics Service - captures app behaviors and sends them to Google Analytics (GA).
 * Presupposes that GA script has been loaded from a script on the host web page.
 * Associates data with a GA "property" from the environment (`gaId`).
 */
export class GaService {
    constructor(window) {
        this.window = window;
        this.ga('create', environment['gaId'], 'auto');
    }
    locationChanged(url) {
        this.sendPage(url);
    }
    sendPage(url) {
        // Won't re-send if the url hasn't changed.
        if (url === this.previousUrl) {
            return;
        }
        this.previousUrl = url;
        this.ga('set', 'page', '/' + url);
        this.ga('send', 'pageview');
    }
    sendEvent(source, action, label, value) {
        this.ga('send', 'event', source, action, label, value);
    }
    ga(...args) {
        const gaFn = this.window['ga'];
        if (gaFn) {
            gaFn(...args);
        }
    }
}
GaService.ɵfac = function GaService_Factory(t) { return new (t || GaService)(i0.ɵɵinject(WindowToken)); };
GaService.ɵprov = i0.ɵɵdefineInjectable({ token: GaService, factory: GaService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GaService, [{
        type: Injectable
    }], function () { return [{ type: Window, decorators: [{
                type: Inject,
                args: [WindowToken]
            }] }]; }, null); })();
//# sourceMappingURL=ga.service.js.map