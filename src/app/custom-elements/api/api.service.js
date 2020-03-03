import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { DOC_CONTENT_URL_PREFIX } from 'app/documents/document.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "app/shared/logger.service";
export class ApiService {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
        this.apiBase = DOC_CONTENT_URL_PREFIX + 'api/';
        this.apiListJsonDefault = 'api-list.json';
        this.firstTime = true;
        this.onDestroy = new Subject();
        this.sectionsSubject = new ReplaySubject(1);
        this._sections = this.sectionsSubject.pipe(takeUntil(this.onDestroy));
    }
    /**
     * Return a cached observable of API sections from a JSON file.
     * API sections is an array of Angular top modules and metadata about their API documents (items).
     */
    get sections() {
        if (this.firstTime) {
            this.firstTime = false;
            this.fetchSections(); // TODO: get URL for fetchSections by configuration?
            // makes sectionsSubject hot; subscribe ensures stays alive (always refCount > 0);
            this._sections.subscribe(sections => this.logger.log(`ApiService got API ${sections.length} section(s)`));
        }
        return this._sections.pipe(tap(sections => {
            sections.forEach(section => {
                section.deprecated = !!section.items &&
                    section.items.every(item => item.stability === 'deprecated');
            });
        }));
    }
    ngOnDestroy() {
        this.onDestroy.next();
    }
    /**
     * Fetch API sections from a JSON file.
     * API sections is an array of Angular top modules and metadata about their API documents (items).
     * Updates `sections` observable
     *
     * @param {string} [src] - Name of the api list JSON file
     */
    fetchSections(src) {
        // TODO: get URL by configuration?
        const url = this.apiBase + (src || this.apiListJsonDefault);
        this.http.get(url)
            .pipe(takeUntil(this.onDestroy), tap(() => this.logger.log(`Got API sections from ${url}`)))
            .subscribe(sections => this.sectionsSubject.next(sections), (err) => {
            // TODO: handle error
            this.logger.error(err);
            throw err; // rethrow for now.
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Logger)); };
ApiService.ɵprov = i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Logger }]; }, null); })();
//# sourceMappingURL=api.service.js.map