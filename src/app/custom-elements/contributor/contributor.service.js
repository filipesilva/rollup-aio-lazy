import { Injectable } from '@angular/core';
import { map, publishLast } from 'rxjs/operators';
// TODO(andrewjs): Look into changing this so that we don't import the service just to get the const
import { CONTENT_URL_PREFIX } from 'app/documents/document.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const contributorsPath = CONTENT_URL_PREFIX + 'contributors.json';
const knownGroups = ['Angular', 'Collaborators', 'GDE'];
export class ContributorService {
    constructor(http) {
        this.http = http;
        this.contributors = this.getContributors();
    }
    getContributors() {
        const contributors = this.http.get(contributorsPath).pipe(
        // Create group map
        map(contribs => {
            const contribMap = {};
            Object.keys(contribs).forEach(key => {
                const contributor = contribs[key];
                contributor.groups.forEach(group => {
                    const contribGroup = contribMap[group] || (contribMap[group] = []);
                    contribGroup.push(contributor);
                });
            });
            return contribMap;
        }), 
        // Flatten group map into sorted group array of sorted contributors
        map(cmap => {
            return Object.keys(cmap).map(key => {
                const order = knownGroups.indexOf(key);
                return {
                    name: key,
                    order: order === -1 ? knownGroups.length : order,
                    contributors: cmap[key].sort(compareContributors)
                };
            })
                .sort(compareGroups);
        }), publishLast());
        contributors.connect();
        return contributors;
    }
}
ContributorService.ɵfac = function ContributorService_Factory(t) { return new (t || ContributorService)(i0.ɵɵinject(i1.HttpClient)); };
ContributorService.ɵprov = i0.ɵɵdefineInjectable({ token: ContributorService, factory: ContributorService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContributorService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
function compareContributors(l, r) {
    return l.name.toUpperCase() > r.name.toUpperCase() ? 1 : -1;
}
function compareGroups(l, r) {
    return l.order === r.order ?
        (l.name > r.name ? 1 : -1) :
        l.order > r.order ? 1 : -1;
}
//# sourceMappingURL=contributor.service.js.map