import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/ga.service";
import * as i2 from "@angular/common";
import * as i3 from "./scroll.service";
import * as i4 from "app/sw-updates/sw-updates.service";
export class LocationService {
    constructor(gaService, location, scrollService, platformLocation, swUpdates) {
        this.gaService = gaService;
        this.location = location;
        this.scrollService = scrollService;
        this.platformLocation = platformLocation;
        this.urlParser = document.createElement('a');
        this.urlSubject = new ReplaySubject(1);
        this.swUpdateActivated = false;
        this.currentUrl = this.urlSubject
            .pipe(map(url => this.stripSlashes(url)));
        this.currentPath = this.currentUrl.pipe(map(url => (url.match(/[^?#]*/) || [])[0]), // strip query and hash
        tap(path => this.gaService.locationChanged(path)));
        this.urlSubject.next(location.path(true));
        this.location.subscribe(state => {
            return this.urlSubject.next(state.url || '');
        });
        swUpdates.updateActivated.subscribe(() => this.swUpdateActivated = true);
    }
    // TODO: ignore if url-without-hash-or-search matches current location?
    go(url) {
        if (!url) {
            return;
        }
        url = this.stripSlashes(url);
        if (/^http/.test(url)) {
            // Has http protocol so leave the site
            this.goExternal(url);
        }
        else if (this.swUpdateActivated) {
            // (Do a "full page navigation" if a ServiceWorker update has been activated)
            // We need to remove stored Position in order to be sure to scroll to the Top position
            this.scrollService.removeStoredScrollInfo();
            this.goExternal(url);
        }
        else {
            this.location.go(url);
            this.urlSubject.next(url);
        }
    }
    goExternal(url) {
        window.location.assign(url);
    }
    replace(url) {
        window.location.replace(url);
    }
    stripSlashes(url) {
        return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
    }
    search() {
        const search = {};
        const path = this.location.path();
        const q = path.indexOf('?');
        if (q > -1) {
            try {
                const params = path.substr(q + 1).split('&');
                params.forEach(p => {
                    const pair = p.split('=');
                    if (pair[0]) {
                        search[decodeURIComponent(pair[0])] = pair[1] && decodeURIComponent(pair[1]);
                    }
                });
            }
            catch (e) { /* don't care */ }
        }
        return search;
    }
    setSearch(label, params) {
        const search = Object.keys(params).reduce((acc, key) => {
            const value = params[key];
            return (value === undefined) ? acc :
                acc += (acc ? '&' : '?') + `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }, '');
        this.platformLocation.replaceState({}, label, this.platformLocation.pathname + search);
    }
    /**
     * Handle user's anchor click
     *
     * @param anchor {HTMLAnchorElement} - the anchor element clicked
     * @param button Number of the mouse button held down. 0 means left or none
     * @param ctrlKey True if control key held down
     * @param metaKey True if command or window key held down
     * @return false if service navigated with `go()`; true if browser should handle it.
     *
     * Since we are using `LocationService` to navigate between docs, without the browser
     * reloading the page, we must intercept clicks on links.
     * If the link is to a document that we will render, then we navigate using `Location.go()`
     * and tell the browser not to handle the event.
     *
     * In most apps you might do this in a `LinkDirective` attached to anchors but in this app
     * we have a special situation where the `DocViewerComponent` is displaying semi-static
     * content that cannot contain directives. So all the links in that content would not be
     * able to use such a `LinkDirective`. Instead we are adding a click handler to the
     * `AppComponent`, whose element contains all the of the application and so captures all
     * link clicks both inside and outside the `DocViewerComponent`.
     */
    handleAnchorClick(anchor, button = 0, ctrlKey = false, metaKey = false) {
        // Check for modifier keys and non-left-button, which indicate the user wants to control navigation
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        // If there is a target and it is not `_self` then we take this
        // as a signal that it doesn't want to be intercepted.
        // TODO: should we also allow an explicit `_self` target to opt-out?
        const anchorTarget = anchor.target;
        if (anchorTarget && anchorTarget !== '_self') {
            return true;
        }
        if (anchor.getAttribute('download') != null) {
            return true; // let the download happen
        }
        const { pathname, search, hash } = anchor;
        const relativeUrl = pathname + search + hash;
        this.urlParser.href = relativeUrl;
        // don't navigate if external link or has extension
        if (anchor.href !== this.urlParser.href ||
            !/\/[^/.]*$/.test(pathname)) {
            return true;
        }
        // approved for navigation
        this.go(relativeUrl);
        return false;
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(i0.ɵɵinject(i1.GaService), i0.ɵɵinject(i2.Location), i0.ɵɵinject(i3.ScrollService), i0.ɵɵinject(i2.PlatformLocation), i0.ɵɵinject(i4.SwUpdatesService)); };
LocationService.ɵprov = i0.ɵɵdefineInjectable({ token: LocationService, factory: LocationService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocationService, [{
        type: Injectable
    }], function () { return [{ type: i1.GaService }, { type: i2.Location }, { type: i3.ScrollService }, { type: i2.PlatformLocation }, { type: i4.SwUpdatesService }]; }, null); })();
//# sourceMappingURL=location.service.js.map