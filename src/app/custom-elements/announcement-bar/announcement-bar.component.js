import { Component } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { CONTENT_URL_PREFIX } from 'app/documents/document.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "app/shared/logger.service";
import * as i3 from "@angular/common";
function AnnouncementBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "img", 3);
    i0.ɵɵelement(3, "p", 4);
    i0.ɵɵelementStart(4, "a", 5);
    i0.ɵɵtext(5, "Learn More");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r52.announcement.imageUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r52.announcement.message, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", ctx_r52.announcement.linkUrl, i0.ɵɵsanitizeUrl);
} }
const announcementsPath = CONTENT_URL_PREFIX + 'announcements.json';
/**
 * Display the latest live announcement. This is used on the homepage.
 *
 * The data for the announcements is kept in `aio/content/marketing/announcements.json`.
 *
 * The format for that data file looks like:
 *
 * ```
 * [
 *   {
 *     "startDate": "2018-02-01",
 *     "endDate": "2018-03-01",
 *     "message": "This is an <b>important</b> announcement",
 *     "imageUrl": "url/to/image",
 *     "linkUrl": "url/to/website"
 *   },
 *   ...
 * ]
 * ```
 *
 * Only one announcement will be shown at any time. This is determined as the first "live"
 * announcement in the file, where "live" means that its start date is before today, and its
 * end date is after today.
 *
 * **Security Note:**
 * The `message` field can contain unsanitized HTML but this field should only updated by
 * verified members of the Angular team.
 */
export class AnnouncementBarComponent {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
    }
    ngOnInit() {
        this.http.get(announcementsPath)
            .pipe(catchError(error => {
            this.logger.error(new Error(`${announcementsPath} request failed: ${error.message}`));
            return [];
        }), map(announcements => this.findCurrentAnnouncement(announcements)), catchError(error => {
            this.logger.error(new Error(`${announcementsPath} contains invalid data: ${error.message}`));
            return [];
        }))
            .subscribe(announcement => this.announcement = announcement);
    }
    /**
     * Get the first date in the list that is "live" now
     */
    findCurrentAnnouncement(announcements) {
        return announcements
            .filter(announcement => new Date(announcement.startDate).valueOf() < Date.now())
            .filter(announcement => new Date(announcement.endDate).valueOf() > Date.now())[0];
    }
}
AnnouncementBarComponent.ɵfac = function AnnouncementBarComponent_Factory(t) { return new (t || AnnouncementBarComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.Logger)); };
AnnouncementBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AnnouncementBarComponent, selectors: [["aio-announcement-bar"]], decls: 1, vars: 1, consts: [["class", "homepage-container", 4, "ngIf"], [1, "homepage-container"], [1, "announcement-bar"], ["alt", "", 3, "src"], [3, "innerHTML"], [1, "button", 3, "href"]], template: function AnnouncementBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AnnouncementBarComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.announcement);
    } }, directives: [i3.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnnouncementBarComponent, [{
        type: Component,
        args: [{
                selector: 'aio-announcement-bar',
                template: `
  <div class="homepage-container" *ngIf="announcement">
    <div class="announcement-bar">
      <img [src]="announcement.imageUrl" alt="">
      <p [innerHTML]="announcement.message"></p>
      <a class="button" [href]="announcement.linkUrl">Learn More</a>
    </div>
  </div>`
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Logger }]; }, null); })();
//# sourceMappingURL=announcement-bar.component.js.map