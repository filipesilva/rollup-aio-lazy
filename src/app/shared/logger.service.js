import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
export class Logger {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    log(value, ...rest) {
        if (!environment.production) {
            console.log(value, ...rest);
        }
    }
    error(error) {
        this.errorHandler.handleError(error);
    }
    warn(value, ...rest) {
        console.warn(value, ...rest);
    }
}
Logger.ɵfac = function Logger_Factory(t) { return new (t || Logger)(i0.ɵɵinject(i0.ErrorHandler)); };
Logger.ɵprov = i0.ɵɵdefineInjectable({ token: Logger, factory: Logger.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Logger, [{
        type: Injectable
    }], function () { return [{ type: i0.ErrorHandler }]; }, null); })();
//# sourceMappingURL=logger.service.js.map