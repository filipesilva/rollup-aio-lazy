import { Injectable } from '@angular/core';
import { AsyncSubject, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/logger.service";
import * as i2 from "@angular/common/http";
import * as i3 from "app/shared/location.service";
export const FILE_NOT_FOUND_ID = 'file-not-found';
export const FETCHING_ERROR_ID = 'fetching-error';
export const CONTENT_URL_PREFIX = 'generated/';
export const DOC_CONTENT_URL_PREFIX = CONTENT_URL_PREFIX + 'docs/';
const FETCHING_ERROR_CONTENTS = (path) => `
  <div class="nf-container l-flex-wrap flex-center">
    <div class="nf-icon material-icons">error_outline</div>
    <div class="nf-response l-flex-wrap">
      <h1 class="no-toc">Request for document failed.</h1>
      <p>
        We are unable to retrieve the "${path}" page at this time.
        Please check your connection and try again later.
      </p>
    </div>
  </div>
`;
export class DocumentService {
    constructor(logger, http, location) {
        this.logger = logger;
        this.http = http;
        this.cache = new Map();
        // Whenever the URL changes we try to get the appropriate doc
        this.currentDocument = location.currentPath.pipe(switchMap(path => this.getDocument(path)));
    }
    getDocument(url) {
        const id = url || 'index';
        this.logger.log('getting document', id);
        if (!this.cache.has(id)) {
            this.cache.set(id, this.fetchDocument(id));
        }
        return this.cache.get(id);
    }
    fetchDocument(id) {
        const requestPath = `${DOC_CONTENT_URL_PREFIX}${id}.json`;
        const subject = new AsyncSubject();
        this.logger.log('fetching document from', requestPath);
        this.http
            .get(requestPath, { responseType: 'json' })
            .pipe(tap(data => {
            if (!data || typeof data !== 'object') {
                this.logger.log('received invalid data:', data);
                throw Error('Invalid data');
            }
        }), catchError((error) => {
            return error.status === 404 ? this.getFileNotFoundDoc(id) : this.getErrorDoc(id, error);
        }))
            .subscribe(subject);
        return subject.asObservable();
    }
    getFileNotFoundDoc(id) {
        if (id !== FILE_NOT_FOUND_ID) {
            this.logger.error(new Error(`Document file not found at '${id}'`));
            // using `getDocument` means that we can fetch the 404 doc contents from the server and cache it
            return this.getDocument(FILE_NOT_FOUND_ID);
        }
        else {
            return of({
                id: FILE_NOT_FOUND_ID,
                contents: 'Document not found'
            });
        }
    }
    getErrorDoc(id, error) {
        this.logger.error(new Error(`Error fetching document '${id}': (${error.message})`));
        this.cache.delete(id);
        return of({
            id: FETCHING_ERROR_ID,
            contents: FETCHING_ERROR_CONTENTS(id),
        });
    }
}
DocumentService.ɵfac = function DocumentService_Factory(t) { return new (t || DocumentService)(i0.ɵɵinject(i1.Logger), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.LocationService)); };
DocumentService.ɵprov = i0.ɵɵdefineInjectable({ token: DocumentService, factory: DocumentService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DocumentService, [{
        type: Injectable
    }], function () { return [{ type: i1.Logger }, { type: i2.HttpClient }, { type: i3.LocationService }]; }, null); })();
//# sourceMappingURL=document.service.js.map