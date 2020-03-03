import { Injectable } from '@angular/core';
import { race, ReplaySubject, timer } from 'rxjs';
import { concatMap, first, publishReplay } from 'rxjs/operators';
import { WebWorkerClient } from 'app/shared/web-worker';
import * as i0 from "@angular/core";
export class SearchService {
    constructor(zone) {
        this.zone = zone;
        this.searchesSubject = new ReplaySubject(1);
    }
    /**
     * Initialize the search engine. We offer an `initDelay` to prevent the search initialisation from delaying the
     * initial rendering of the web page. Triggering a search will override this delay and cause the index to be
     * loaded immediately.
     *
     * @param initDelay the number of milliseconds to wait before we load the WebWorker and generate the search index
     */
    initWorker(initDelay) {
        // Wait for the initDelay or the first search
        const ready = this.ready = race(timer(initDelay), this.searchesSubject.asObservable().pipe(first()))
            .pipe(concatMap(() => {
            // Create the worker and load the index
            const worker = new Worker('app/search/search.worker', { type: 'module' });
            this.worker = WebWorkerClient.create(worker, this.zone);
            return this.worker.sendMessage('load-index');
        }), publishReplay(1));
        // Connect to the observable to kick off the timer
        ready.connect();
        return ready;
    }
    /**
     * Search the index using the given query and emit results on the observable that is returned.
     * @param query The query to run against the index.
     * @returns an observable collection of search results
     */
    search(query) {
        // Trigger the searches subject to override the init delay timer
        this.searchesSubject.next(query);
        // Once the index has loaded, switch to listening to the searches coming in.
        return this.ready.pipe(concatMap(() => this.worker.sendMessage('query-index', query)));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(i0.ɵɵinject(i0.NgZone)); };
SearchService.ɵprov = i0.ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchService, [{
        type: Injectable
    }], function () { return [{ type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=search.service.js.map