import { Injectable } from '@angular/core';
import { map, publishLast } from 'rxjs/operators';
import { CONTENT_URL_PREFIX } from 'app/documents/document.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const resourcesPath = CONTENT_URL_PREFIX + 'resources.json';
export class ResourceService {
    constructor(http) {
        this.http = http;
        this.categories = this.getCategories();
    }
    getCategories() {
        const categories = this.http.get(resourcesPath).pipe(map(data => mkCategories(data)), publishLast());
        categories.connect();
        return categories;
    }
}
ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(i0.ɵɵinject(i1.HttpClient)); };
ResourceService.ɵprov = i0.ɵɵdefineInjectable({ token: ResourceService, factory: ResourceService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ResourceService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
// Extract sorted Category[] from resource JSON data
function mkCategories(categoryJson) {
    return Object.keys(categoryJson).map(catKey => {
        const cat = categoryJson[catKey];
        return {
            id: makeId(catKey),
            title: catKey,
            order: cat.order,
            subCategories: mkSubCategories(cat.subCategories, catKey)
        };
    })
        .sort(compareCats);
}
// Extract sorted SubCategory[] from JSON category data
function mkSubCategories(subCategoryJson, catKey) {
    return Object.keys(subCategoryJson).map(subKey => {
        const sub = subCategoryJson[subKey];
        return {
            id: makeId(subKey),
            title: subKey,
            order: sub.order,
            resources: mkResources(sub.resources, subKey, catKey)
        };
    })
        .sort(compareCats);
}
// Extract sorted Resource[] from JSON subcategory data
function mkResources(resourceJson, subKey, catKey) {
    return Object.keys(resourceJson).map(resKey => {
        const res = resourceJson[resKey];
        res.category = catKey;
        res.subCategory = subKey;
        res.id = makeId(resKey);
        return res;
    })
        .sort(compareTitles);
}
function compareCats(l, r) {
    return l.order === r.order ? compareTitles(l, r) : l.order > r.order ? 1 : -1;
}
function compareTitles(l, r) {
    return l.title.toUpperCase() > r.title.toUpperCase() ? 1 : -1;
}
function makeId(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}
//# sourceMappingURL=resource.service.js.map