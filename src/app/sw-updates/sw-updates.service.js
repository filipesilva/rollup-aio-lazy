import { Injectable } from '@angular/core';
import { concat, interval, NEVER, Subject } from 'rxjs';
import { first, map, takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/logger.service";
import * as i2 from "@angular/service-worker";
/**
 * SwUpdatesService
 *
 * @description
 * 1. Checks for available ServiceWorker updates once instantiated.
 * 2. Re-checks every 6 hours.
 * 3. Whenever an update is available, it activates the update.
 *
 * @property
 * `updateActivated` {Observable<string>} - Emit the version hash whenever an update is activated.
 */
export class SwUpdatesService {
    constructor(appRef, logger, swu) {
        this.logger = logger;
        this.swu = swu;
        this.checkInterval = 1000 * 60 * 60 * 6; // 6 hours
        this.onDestroy = new Subject();
        if (!swu.isEnabled) {
            this.updateActivated = NEVER.pipe(takeUntil(this.onDestroy));
            return;
        }
        // Periodically check for updates (after the app is stabilized).
        const appIsStable = appRef.isStable.pipe(first(v => v));
        concat(appIsStable, interval(this.checkInterval))
            .pipe(tap(() => this.log('Checking for update...')), takeUntil(this.onDestroy))
            .subscribe(() => this.swu.checkForUpdate());
        // Activate available updates.
        this.swu.available
            .pipe(tap(evt => this.log(`Update available: ${JSON.stringify(evt)}`)), takeUntil(this.onDestroy))
            .subscribe(() => this.swu.activateUpdate());
        // Notify about activated updates.
        this.updateActivated = this.swu.activated.pipe(tap(evt => this.log(`Update activated: ${JSON.stringify(evt)}`)), map(evt => evt.current.hash), takeUntil(this.onDestroy));
    }
    ngOnDestroy() {
        this.onDestroy.next();
    }
    log(message) {
        const timestamp = new Date().toISOString();
        this.logger.log(`[SwUpdates - ${timestamp}]: ${message}`);
    }
}
SwUpdatesService.ɵfac = function SwUpdatesService_Factory(t) { return new (t || SwUpdatesService)(i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i1.Logger), i0.ɵɵinject(i2.SwUpdate)); };
SwUpdatesService.ɵprov = i0.ɵɵdefineInjectable({ token: SwUpdatesService, factory: SwUpdatesService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SwUpdatesService, [{
        type: Injectable
    }], function () { return [{ type: i0.ApplicationRef }, { type: i1.Logger }, { type: i2.SwUpdate }]; }, null); })();
//# sourceMappingURL=sw-updates.service.js.map