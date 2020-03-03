import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/location.service";
import * as i2 from "app/search/search.service";
import * as i3 from "../../shared/search-results/search-results.component";
import * as i4 from "@angular/common";
export class FileNotFoundSearchComponent {
    constructor(location, search) {
        this.location = location;
        this.search = search;
    }
    ngOnInit() {
        this.searchResults = this.location.currentPath.pipe(switchMap(path => {
            const query = path.split(/\W+/).join(' ');
            return this.search.search(query);
        }));
    }
}
FileNotFoundSearchComponent.ɵfac = function FileNotFoundSearchComponent_Factory(t) { return new (t || FileNotFoundSearchComponent)(i0.ɵɵdirectiveInject(i1.LocationService), i0.ɵɵdirectiveInject(i2.SearchService)); };
FileNotFoundSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FileNotFoundSearchComponent, selectors: [["aio-file-not-found-search"]], decls: 4, vars: 3, consts: [[1, "embedded", 3, "searchResults"]], template: function FileNotFoundSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "Let's see if any of these search results help...");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "aio-search-results", 0);
        i0.ɵɵpipe(3, "async");
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("searchResults", i0.ɵɵpipeBind1(3, 1, ctx.searchResults));
    } }, directives: [i3.SearchResultsComponent], pipes: [i4.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FileNotFoundSearchComponent, [{
        type: Component,
        args: [{
                selector: 'aio-file-not-found-search',
                template: `<p>Let's see if any of these search results help...</p>
  <aio-search-results class="embedded" [searchResults]="searchResults | async"></aio-search-results>`
            }]
    }], function () { return [{ type: i1.LocationService }, { type: i2.SearchService }]; }, null); })();
//# sourceMappingURL=file-not-found-search.component.js.map