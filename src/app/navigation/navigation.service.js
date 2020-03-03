import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, publishLast, publishReplay } from 'rxjs/operators';
import { CONTENT_URL_PREFIX } from 'app/documents/document.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "app/shared/location.service";
export const navigationPath = CONTENT_URL_PREFIX + 'navigation.json';
export class NavigationService {
    constructor(http, location) {
        this.http = http;
        this.location = location;
        const navigationInfo = this.fetchNavigationInfo();
        this.navigationViews = this.getNavigationViews(navigationInfo);
        this.currentNodes = this.getCurrentNodes(this.navigationViews);
        // The version information is packaged inside the navigation response to save us an extra request.
        this.versionInfo = this.getVersionInfo(navigationInfo);
    }
    /**
     * Get an observable that fetches the `NavigationResponse` from the server.
     * We create an observable by calling `http.get` but then publish it to share the result
     * among multiple subscribers, without triggering new requests.
     * We use `publishLast` because once the http request is complete the request observable completes.
     * If you use `publish` here then the completed request observable will cause the subscribed observables to complete too.
     * We `connect` to the published observable to trigger the request immediately.
     * We could use `.refCount` here but then if the subscribers went from 1 -> 0 -> 1 then you would get
     * another request to the server.
     * We are not storing the subscription from connecting as we do not expect this service to be destroyed.
     */
    fetchNavigationInfo() {
        const navigationInfo = this.http.get(navigationPath)
            .pipe(publishLast());
        navigationInfo.connect();
        return navigationInfo;
    }
    getVersionInfo(navigationInfo) {
        const versionInfo = navigationInfo.pipe(map(response => response.__versionInfo), publishLast());
        versionInfo.connect();
        return versionInfo;
    }
    getNavigationViews(navigationInfo) {
        const navigationViews = navigationInfo.pipe(map(response => {
            const views = Object.assign({}, response);
            Object.keys(views).forEach(key => {
                if (key[0] === '_') {
                    delete views[key];
                }
            });
            return views;
        }), publishLast());
        navigationViews.connect();
        return navigationViews;
    }
    /**
     * Get an observable of the current nodes (the ones that match the current URL)
     * We use `publishReplay(1)` because otherwise subscribers will have to wait until the next
     * URL change before they receive an emission.
     * See above for discussion of using `connect`.
     */
    getCurrentNodes(navigationViews) {
        const currentNodes = combineLatest([
            navigationViews.pipe(map(views => this.computeUrlToNavNodesMap(views))),
            this.location.currentPath,
        ])
            .pipe(map((result) => ({ navMap: result[0], url: result[1] })), map((result) => {
            const matchSpecialUrls = /^api/.exec(result.url);
            if (matchSpecialUrls) {
                result.url = matchSpecialUrls[0];
            }
            return result.navMap.get(result.url) || { '': { view: '', url: result.url, nodes: [] } };
        }), publishReplay(1));
        currentNodes.connect();
        return currentNodes;
    }
    /**
     * Compute a mapping from URL to an array of nodes, where the first node in the array
     * is the one that matches the URL and the rest are the ancestors of that node.
     *
     * @param navigation - A collection of navigation nodes that are to be mapped
     */
    computeUrlToNavNodesMap(navigation) {
        const navMap = new Map();
        Object.keys(navigation)
            .forEach(view => navigation[view]
            .forEach(node => this.walkNodes(view, navMap, node)));
        return navMap;
    }
    /**
     * Add tooltip to node if it doesn't have one and have title.
     * If don't want tooltip, specify `"tooltip": ""` in navigation.json
     */
    ensureHasTooltip(node) {
        const title = node.title;
        const tooltip = node.tooltip;
        if (tooltip == null && title) {
            // add period if no trailing punctuation
            node.tooltip = title + (/[a-zA-Z0-9]$/.test(title) ? '.' : '');
        }
    }
    /**
     * Walk the nodes of a navigation tree-view,
     * patching them and computing their ancestor nodes
     */
    walkNodes(view, navMap, node, ancestors = []) {
        const nodes = [node, ...ancestors];
        const url = node.url;
        this.ensureHasTooltip(node);
        // only map to this node if it has a url
        if (url) {
            // Strip off trailing slashes from nodes in the navMap - they are not relevant to matching
            const cleanedUrl = url.replace(/\/$/, '');
            if (!navMap.has(cleanedUrl)) {
                navMap.set(cleanedUrl, {});
            }
            const navMapItem = navMap.get(cleanedUrl);
            navMapItem[view] = { url, view, nodes };
        }
        if (node.children) {
            node.children.forEach(child => this.walkNodes(view, navMap, child, nodes));
        }
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LocationService)); };
NavigationService.ɵprov = i0.ɵɵdefineInjectable({ token: NavigationService, factory: NavigationService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavigationService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LocationService }]; }, null); })();
//# sourceMappingURL=navigation.service.js.map