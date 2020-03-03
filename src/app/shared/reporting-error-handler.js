import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { WindowToken } from './window';
import * as i0 from "@angular/core";
/**
 * Extend the default error handling to report errors to an external service - e.g Google Analytics.
 *
 * Errors outside the Angular application may also be handled by `window.onerror`.
 */
export class ReportingErrorHandler extends ErrorHandler {
    constructor(window) {
        super();
        this.window = window;
    }
    /**
     * Send error info to Google Analytics, in addition to the default handling.
     * @param error Information about the error.
     */
    handleError(error) {
        try {
            super.handleError(error);
        }
        catch (e) {
            this.reportError(e);
        }
        this.reportError(error);
    }
    reportError(error) {
        if (this.window.onerror) {
            if (typeof error === 'string') {
                this.window.onerror(error);
            }
            else {
                this.window.onerror(error.message, undefined, undefined, undefined, error);
            }
        }
    }
}
ReportingErrorHandler.ɵfac = function ReportingErrorHandler_Factory(t) { return new (t || ReportingErrorHandler)(i0.ɵɵinject(WindowToken)); };
ReportingErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ token: ReportingErrorHandler, factory: ReportingErrorHandler.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReportingErrorHandler, [{
        type: Injectable
    }], function () { return [{ type: Window, decorators: [{
                type: Inject,
                args: [WindowToken]
            }] }]; }, null); })();
//# sourceMappingURL=reporting-error-handler.js.map