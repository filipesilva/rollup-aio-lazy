import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/location.service";
/**
 * Information about the deployment of this application.
 */
export class Deployment {
    constructor(location) {
        this.location = location;
        /**
         * The deployment mode set from the environment provided at build time;
         * or overridden by the `mode` query parameter: e.g. `...?mode=archive`
         */
        this.mode = this.location.search()['mode'] || environment.mode;
    }
}
Deployment.ɵfac = function Deployment_Factory(t) { return new (t || Deployment)(i0.ɵɵinject(i1.LocationService)); };
Deployment.ɵprov = i0.ɵɵdefineInjectable({ token: Deployment, factory: Deployment.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Deployment, [{
        type: Injectable
    }], function () { return [{ type: i1.LocationService }]; }, null); })();
//# sourceMappingURL=deployment.service.js.map