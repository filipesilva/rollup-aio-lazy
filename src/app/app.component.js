import { Component, ElementRef, HostBinding, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NotificationComponent } from 'app/layout/notification/notification.component';
import { SearchBoxComponent } from 'app/search/search-box/search-box.component';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/deployment.service";
import * as i2 from "app/documents/document.service";
import * as i3 from "app/shared/location.service";
import * as i4 from "app/navigation/navigation.service";
import * as i5 from "app/shared/scroll.service";
import * as i6 from "app/search/search.service";
import * as i7 from "app/shared/toc.service";
import * as i8 from "@angular/common";
import * as i9 from "@angular/material/toolbar";
import * as i10 from "app/layout/notification/notification.component";
import * as i11 from "@angular/material/icon";
import * as i12 from "@angular/material/button";
import * as i13 from "app/search/search-box/search-box.component";
import * as i14 from "@angular/material/sidenav";
import * as i15 from "app/layout/nav-menu/nav-menu.component";
import * as i16 from "./shared/select/select.component";
import * as i17 from "app/layout/mode-banner/mode-banner.component";
import * as i18 from "app/layout/doc-viewer/doc-viewer.component";
import * as i19 from "app/layout/footer/footer.component";
import * as i20 from "@angular/material/progress-bar";
import * as i21 from "app/layout/top-menu/top-menu.component";
import * as i22 from "./shared/search-results/search-results.component";
import * as i23 from "app/layout/doc-viewer/dt.component";
import * as i24 from "./custom-elements/lazy-custom-element.component";
const _c0 = ["searchBox", "searchResultsView"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelement(1, "mat-progress-bar", 39);
    i0.ɵɵelementEnd();
} }
function AppComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function AppComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 41);
} }
function AppComponent_aio_top_menu_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "aio-top-menu", 42);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nodes", ctx_r4.topMenuNodes);
} }
function AppComponent_aio_search_results_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aio-search-results", 43, 44);
    i0.ɵɵlistener("resultSelected", function AppComponent_aio_search_results_28_Template_aio_search_results_resultSelected_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.hideSearchResults(); });
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("searchResults", i0.ɵɵpipeBind1(2, 1, ctx_r6.searchResults));
} }
function AppComponent_aio_nav_menu_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "aio-nav-menu", 27);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nodes", ctx_r8.topMenuNarrowNodes)("currentNode", ctx_r8.currentNodes == null ? null : ctx_r8.currentNodes.TopBarNarrow)("isWide", false);
} }
function AppComponent_aio_dt_39_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aio-dt", 45);
    i0.ɵɵlistener("docChange", function AppComponent_aio_dt_39_Template_aio_dt_docChange_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.currentDocument = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("doc", ctx_r9.currentDocument);
} }
function AppComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵlistener("wheel", function AppComponent_div_40_Template_div_wheel_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.restrainScrolling($event); });
    i0.ɵɵelement(1, "aio-lazy-ce", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-height", ctx_r10.tocMaxHeight, "px");
} }
function AppComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { "collapsed": a0 }; };
const sideNavView = 'SideNav';
export class AppComponent {
    constructor(deployment, documentService, hostElement, locationService, navigationService, scrollService, searchService, tocService) {
        this.deployment = deployment;
        this.documentService = documentService;
        this.hostElement = hostElement;
        this.locationService = locationService;
        this.navigationService = navigationService;
        this.scrollService = scrollService;
        this.searchService = searchService;
        this.tocService = tocService;
        this.currentNodes = {};
        this.dtOn = false;
        /**
         * These CSS classes are computed from the current state of the application
         * (e.g. what document is being viewed) to allow for fine grain control over
         * the styling of individual pages.
         * You will get three classes:
         *
         * * `page-...`: computed from the current document id (e.g. events, guide-security, tutorial-toh-pt2)
         * * `folder-...`: computed from the top level folder for an id (e.g. guide, tutorial, etc)
         * * `view-...`: computef from the navigation view (e.g. SideNav, TopBar, etc)
         */
        this.hostClasses = '';
        // Disable all Angular animations for the initial render.
        this.isStarting = true;
        this.isTransitioning = true;
        this.isFetching = false;
        this.isSideBySide = false;
        this.isSideNavDoc = false;
        this.sideBySideWidth = 992;
        this.hasFloatingToc = false;
        this.showFloatingToc = new BehaviorSubject(false);
        this.showFloatingTocWidth = 800;
        this.tocMaxHeightOffset = 0;
        // Search related properties
        this.showSearchResults = false;
        this.notificationAnimating = false;
    }
    get isOpened() { return this.isSideBySide && this.isSideNavDoc; }
    get mode() { return this.isSideBySide ? 'side' : 'over'; }
    ngOnInit() {
        // Do not initialize the search on browsers that lack web worker support
        if ('Worker' in window) {
            // Delay initialization by up to 2 seconds
            this.searchService.initWorker(2000);
        }
        this.onResize(window.innerWidth);
        /* No need to unsubscribe because this root component never dies */
        this.documentService.currentDocument.subscribe(doc => this.currentDocument = doc);
        this.locationService.currentPath.subscribe(path => {
            if (path === this.currentPath) {
                // scroll only if on same page (most likely a change to the hash)
                this.scrollService.scroll();
            }
            else {
                // don't scroll; leave that to `onDocRendered`
                this.currentPath = path;
                // Start progress bar if doc not rendered within brief time
                clearTimeout(this.isFetchingTimeout);
                this.isFetchingTimeout = setTimeout(() => this.isFetching = true, 200);
            }
        });
        this.navigationService.currentNodes.subscribe(currentNodes => {
            this.currentNodes = currentNodes;
            // Redirect to docs if we are in archive mode and are not hitting a docs page
            // (i.e. we have arrived at a marketing page)
            if (this.deployment.mode === 'archive' && !currentNodes[sideNavView]) {
                this.locationService.replace('docs');
            }
        });
        // Compute the version picker list from the current version and the versions in the navigation map
        combineLatest([
            this.navigationService.versionInfo,
            this.navigationService.navigationViews.pipe(map(views => views['docVersions'])),
        ]).subscribe(([versionInfo, versions]) => {
            // TODO(pbd): consider whether we can lookup the stable and next versions from the internet
            const computedVersions = [
                { title: 'next', url: 'https://next.angular.io' },
                { title: 'stable', url: 'https://angular.io' },
            ];
            if (this.deployment.mode === 'archive') {
                computedVersions.push({ title: `v${versionInfo.major}` });
            }
            this.docVersions = [...computedVersions, ...versions];
            // Find the current version - eithers title matches the current deployment mode
            // or its title matches the major version of the current version info
            this.currentDocVersion = this.docVersions.find(version => version.title === this.deployment.mode || version.title === `v${versionInfo.major}`);
            this.currentDocVersion.title += ` (v${versionInfo.raw})`;
        });
        this.navigationService.navigationViews.subscribe(views => {
            this.footerNodes = views['Footer'] || [];
            this.sideNavNodes = views['SideNav'] || [];
            this.topMenuNodes = views['TopBar'] || [];
            this.topMenuNarrowNodes = views['TopBarNarrow'] || this.topMenuNodes;
        });
        this.navigationService.versionInfo.subscribe(vi => this.versionInfo = vi);
        const hasNonEmptyToc = this.tocService.tocList.pipe(map(tocList => tocList.length > 0));
        combineLatest([hasNonEmptyToc, this.showFloatingToc])
            .subscribe(([hasToc, showFloatingToc]) => this.hasFloatingToc = hasToc && showFloatingToc);
        // Generally, we want to delay updating the shell (e.g. host classes, sidenav state) for the new
        // document, until after the leaving document has been removed (to avoid having the styles for
        // the new document applied prematurely).
        // For the first document, though, (when we know there is no previous document), we want to
        // ensure the styles are applied as soon as possible to avoid flicker.
        combineLatest([
            this.documentService.currentDocument,
            this.navigationService.currentNodes,
        ]).pipe(first())
            .subscribe(() => this.updateShell());
    }
    onDocReady() {
        // About to transition to new view.
        this.isTransitioning = true;
        // Stop fetching timeout (which, when render is fast, means progress bar never shown)
        clearTimeout(this.isFetchingTimeout);
        // If progress bar has been shown, keep it for at least 500ms (to avoid flashing).
        setTimeout(() => this.isFetching = false, 500);
    }
    onDocRemoved() {
        this.scrollService.removeStoredScrollInfo();
    }
    onDocInserted() {
        // Update the shell (host classes, sidenav state) to match the new document.
        // This may be called as a result of actions initiated by view updates.
        // In order to avoid errors (e.g. `ExpressionChangedAfterItHasBeenChecked`), updating the view
        // (e.g. sidenav, host classes) needs to happen asynchronously.
        setTimeout(() => this.updateShell());
        // Scroll the good position depending on the context
        this.scrollService.scrollAfterRender(500);
    }
    onDocRendered() {
        if (this.isStarting) {
            // In order to ensure that the initial sidenav-content left margin
            // adjustment happens without animation, we need to ensure that
            // `isStarting` remains `true` until the margin change is triggered.
            // (Apparently, this happens with a slight delay.)
            setTimeout(() => this.isStarting = false, 100);
        }
        this.isTransitioning = false;
    }
    onDocVersionChange(versionIndex) {
        const version = this.docVersions[versionIndex];
        if (version.url) {
            this.locationService.go(version.url);
        }
    }
    onResize(width) {
        this.isSideBySide = width >= this.sideBySideWidth;
        this.showFloatingToc.next(width > this.showFloatingTocWidth);
        if (this.isSideBySide && !this.isSideNavDoc) {
            // If this is a non-sidenav doc and the screen is wide enough so that we can display menu
            // items in the top-bar, ensure the sidenav is closed.
            // (This condition can only be met when the resize event changes the value of `isSideBySide`
            //  from `false` to `true` while on a non-sidenav doc.)
            this.sidenav.toggle(false);
        }
    }
    onClick(eventTarget, button, ctrlKey, metaKey, altKey) {
        // Hide the search results if we clicked outside both the "search box" and the "search results"
        if (!this.searchElements.some(element => element.nativeElement.contains(eventTarget))) {
            this.hideSearchResults();
        }
        // Show developer source view if the footer is clicked while holding the meta and alt keys
        if (eventTarget.tagName === 'FOOTER' && metaKey && altKey) {
            this.dtOn = !this.dtOn;
            return false;
        }
        // Deal with anchor clicks; climb DOM tree until anchor found (or null)
        let target = eventTarget;
        while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
        }
        if (target instanceof HTMLAnchorElement) {
            return this.locationService.handleAnchorClick(target, button, ctrlKey, metaKey);
        }
        // Allow the click to pass through
        return true;
    }
    setPageId(id) {
        // Special case the home page
        this.pageId = (id === 'index') ? 'home' : id.replace('/', '-');
    }
    setFolderId(id) {
        // Special case the home page
        this.folderId = (id === 'index') ? 'home' : id.split('/', 1)[0];
    }
    notificationDismissed() {
        this.notificationAnimating = true;
        // this should be kept in sync with the animation durations in:
        // - aio/src/styles/2-modules/_notification.scss
        // - aio/src/app/layout/notification/notification.component.ts
        setTimeout(() => this.notificationAnimating = false, 250);
        this.updateHostClasses();
    }
    updateHostClasses() {
        const mode = `mode-${this.deployment.mode}`;
        const sideNavOpen = `sidenav-${this.sidenav.opened ? 'open' : 'closed'}`;
        const pageClass = `page-${this.pageId}`;
        const folderClass = `folder-${this.folderId}`;
        const viewClasses = Object.keys(this.currentNodes).map(view => `view-${view}`).join(' ');
        const notificationClass = `aio-notification-${this.notification.showNotification}`;
        const notificationAnimatingClass = this.notificationAnimating ? 'aio-notification-animating' : '';
        this.hostClasses = [
            mode,
            sideNavOpen,
            pageClass,
            folderClass,
            viewClasses,
            notificationClass,
            notificationAnimatingClass
        ].join(' ');
    }
    updateShell() {
        // Update the SideNav state (if necessary).
        this.updateSideNav();
        // Update the host classes.
        this.setPageId(this.currentDocument.id);
        this.setFolderId(this.currentDocument.id);
        this.updateHostClasses();
    }
    updateSideNav() {
        // Preserve current sidenav open state by default.
        let openSideNav = this.sidenav.opened;
        const isSideNavDoc = !!this.currentNodes[sideNavView];
        if (this.isSideNavDoc !== isSideNavDoc) {
            // View type changed. Is it now a sidenav view (e.g, guide or tutorial)?
            // Open if changed to a sidenav doc; close if changed to a marketing doc.
            openSideNav = this.isSideNavDoc = isSideNavDoc;
        }
        // May be open or closed when wide; always closed when narrow.
        this.sidenav.toggle(this.isSideBySide && openSideNav);
    }
    // Dynamically change height of table of contents container
    onScroll() {
        if (!this.tocMaxHeightOffset) {
            // Must wait until `mat-toolbar` is measurable.
            const el = this.hostElement.nativeElement;
            const headerEl = el.querySelector('.app-toolbar');
            const footerEl = el.querySelector('footer');
            if (headerEl && footerEl) {
                this.tocMaxHeightOffset =
                    headerEl.clientHeight +
                        footerEl.clientHeight +
                        24; //  fudge margin
            }
        }
        this.tocMaxHeight = (document.body.scrollHeight - window.pageYOffset - this.tocMaxHeightOffset).toFixed(2);
    }
    // Restrain scrolling inside an element, when the cursor is over it
    restrainScrolling(evt) {
        const elem = evt.currentTarget;
        const scrollTop = elem.scrollTop;
        if (evt.deltaY < 0) {
            // Trying to scroll up: Prevent scrolling if already at the top.
            if (scrollTop < 1) {
                evt.preventDefault();
            }
        }
        else {
            // Trying to scroll down: Prevent scrolling if already at the bottom.
            const maxScrollTop = elem.scrollHeight - elem.clientHeight;
            if (maxScrollTop - scrollTop < 1) {
                evt.preventDefault();
            }
        }
    }
    // Search related methods and handlers
    hideSearchResults() {
        this.showSearchResults = false;
        const oldSearch = this.locationService.search();
        if (oldSearch.search !== undefined) {
            this.locationService.setSearch('', Object.assign(Object.assign({}, oldSearch), { search: undefined }));
        }
    }
    focusSearchBox() {
        if (this.searchBox) {
            this.searchBox.focus();
        }
    }
    doSearch(query) {
        this.searchResults = this.searchService.search(query);
        this.showSearchResults = !!query;
    }
    onKeyUp(key, keyCode) {
        // forward slash "/"
        if (key === '/' || keyCode === 191) {
            this.focusSearchBox();
        }
        if (key === 'Escape' || keyCode === 27) {
            // escape key
            if (this.showSearchResults) {
                this.hideSearchResults();
                this.focusSearchBox();
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.Deployment), i0.ɵɵdirectiveInject(i2.DocumentService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.LocationService), i0.ɵɵdirectiveInject(i4.NavigationService), i0.ɵɵdirectiveInject(i5.ScrollService), i0.ɵɵdirectiveInject(i6.SearchService), i0.ɵɵdirectiveInject(i7.TocService)); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["aio-shell"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(SearchBoxComponent, true);
        i0.ɵɵstaticViewQuery(MatSidenav, true);
        i0.ɵɵstaticViewQuery(NotificationComponent, true);
        i0.ɵɵviewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchBox = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notification = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchElements = _t);
    } }, hostVars: 3, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event.target.innerWidth); }, false, i0.ɵɵresolveWindow)("click", function AppComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target, $event.button, $event.ctrlKey, $event.metaKey, $event.altKey); })("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow)("keyup", function AppComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event.key, $event.which); }, false, i0.ɵɵresolveDocument);
    } if (rf & 2) {
        i0.ɵɵupdateSyntheticHostBinding("@.disabled", ctx.isStarting);
        i0.ɵɵclassMap(ctx.hostClasses);
    } }, decls: 44, vars: 36, consts: [["id", "top-of-page"], ["class", "progress-bar-container", 4, "ngIf"], ["color", "primary", 1, "app-toolbar", "no-print"], [1, "notification-container"], ["notificationId", "survey-february-2019", "expirationDate", "2019-03-01", 3, "dismissOnContentClick", "dismissed"], ["href", "http://bit.ly/angular-survey-2019"], ["svgIcon", "insert_comment", "aria-label", "Announcement", 1, "icon"], [1, "message"], [1, "action-button"], ["mat-button", "", "title", "Docs menu", 1, "hamburger", 3, "click"], ["svgIcon", "menu"], ["href", "/", 1, "nav-link", "home", 3, "ngSwitch"], ["src", "assets/images/logos/angular/logo-nav@2x.png", "width", "150", "height", "40", "title", "Home", "alt", "Home", 4, "ngSwitchCase"], ["src", "assets/images/logos/angular/shield-large.svg", "width", "37", "height", "40", "title", "Home", "alt", "Home", 4, "ngSwitchDefault"], [3, "nodes", 4, "ngIf"], [1, "search-container", 3, "onSearch", "onFocus"], ["searchBox", ""], [1, "toolbar-external-icons-container"], ["href", "https://twitter.com/angular", "title", "Twitter", "aria-label", "Angular on twitter"], ["svgIcon", "logos:twitter"], ["href", "https://github.com/angular/angular", "title", "GitHub", "aria-label", "Angular on github"], ["svgIcon", "logos:github"], [3, "searchResults", "resultSelected", 4, "ngIf"], ["role", "main", 1, "sidenav-container"], [1, "sidenav", 3, "ngClass", "mode", "opened", "openedChange"], ["sidenav", ""], [3, "nodes", "currentNode", "isWide", 4, "ngIf"], [3, "nodes", "currentNode", "isWide"], [1, "doc-version"], [3, "options", "selected", "change"], ["role", "main", 1, "sidenav-content", 3, "id"], [3, "mode", "version"], [3, "doc", "docReady", "docRemoved", "docInserted", "docRendered"], [3, "doc", "docChange", 4, "ngIf"], ["class", "toc-container no-print", 3, "max-height", "wheel", 4, "ngIf"], [1, "no-print"], [3, "nodes", "versionInfo"], ["class", "cdk-visually-hidden", 4, "ngIf"], [1, "progress-bar-container"], ["mode", "indeterminate", "color", "warn"], ["src", "assets/images/logos/angular/logo-nav@2x.png", "width", "150", "height", "40", "title", "Home", "alt", "Home"], ["src", "assets/images/logos/angular/shield-large.svg", "width", "37", "height", "40", "title", "Home", "alt", "Home"], [3, "nodes"], [3, "searchResults", "resultSelected"], ["searchResultsView", ""], [3, "doc", "docChange"], [1, "toc-container", "no-print", 3, "wheel"], ["selector", "aio-toc"], [1, "cdk-visually-hidden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = i0.ɵɵgetCurrentView();
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵtemplate(1, AppComponent_div_1_Template, 2, 0, "div", 1);
        i0.ɵɵelementStart(2, "mat-toolbar", 2);
        i0.ɵɵelementStart(3, "mat-toolbar-row", 3);
        i0.ɵɵelementStart(4, "aio-notification", 4);
        i0.ɵɵlistener("dismissed", function AppComponent_Template_aio_notification_dismissed_4_listener($event) { return ctx.notificationDismissed(); });
        i0.ɵɵelementStart(5, "a", 5);
        i0.ɵɵelement(6, "mat-icon", 6);
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵtext(8, "Help Angular by taking a ");
        i0.ɵɵelementStart(9, "b");
        i0.ɵɵtext(10, "1 minute survey");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(11, "!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "span", 8);
        i0.ɵɵtext(13, "Go to survey");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-toolbar-row");
        i0.ɵɵelementStart(15, "button", 9);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_15_listener($event) { i0.ɵɵrestoreView(_r19); const _r7 = i0.ɵɵreference(31); return _r7.toggle(); });
        i0.ɵɵelement(16, "mat-icon", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "a", 11);
        i0.ɵɵtemplate(18, AppComponent_img_18_Template, 1, 0, "img", 12);
        i0.ɵɵtemplate(19, AppComponent_img_19_Template, 1, 0, "img", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, AppComponent_aio_top_menu_20_Template, 1, 1, "aio-top-menu", 14);
        i0.ɵɵelementStart(21, "aio-search-box", 15, 16);
        i0.ɵɵlistener("onSearch", function AppComponent_Template_aio_search_box_onSearch_21_listener($event) { return ctx.doSearch($event); })("onFocus", function AppComponent_Template_aio_search_box_onFocus_21_listener($event) { return ctx.doSearch($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 17);
        i0.ɵɵelementStart(24, "a", 18);
        i0.ɵɵelement(25, "mat-icon", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "a", 20);
        i0.ɵɵelement(27, "mat-icon", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, AppComponent_aio_search_results_28_Template, 3, 3, "aio-search-results", 22);
        i0.ɵɵelementStart(29, "mat-sidenav-container", 23);
        i0.ɵɵelementStart(30, "mat-sidenav", 24, 25);
        i0.ɵɵlistener("openedChange", function AppComponent_Template_mat_sidenav_openedChange_30_listener($event) { return ctx.updateHostClasses(); });
        i0.ɵɵtemplate(32, AppComponent_aio_nav_menu_32_Template, 1, 3, "aio-nav-menu", 26);
        i0.ɵɵelement(33, "aio-nav-menu", 27);
        i0.ɵɵelementStart(34, "div", 28);
        i0.ɵɵelementStart(35, "aio-select", 29);
        i0.ɵɵlistener("change", function AppComponent_Template_aio_select_change_35_listener($event) { return ctx.onDocVersionChange($event.index); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "main", 30);
        i0.ɵɵelement(37, "aio-mode-banner", 31);
        i0.ɵɵelementStart(38, "aio-doc-viewer", 32);
        i0.ɵɵlistener("docReady", function AppComponent_Template_aio_doc_viewer_docReady_38_listener($event) { return ctx.onDocReady(); })("docRemoved", function AppComponent_Template_aio_doc_viewer_docRemoved_38_listener($event) { return ctx.onDocRemoved(); })("docInserted", function AppComponent_Template_aio_doc_viewer_docInserted_38_listener($event) { return ctx.onDocInserted(); })("docRendered", function AppComponent_Template_aio_doc_viewer_docRendered_38_listener($event) { return ctx.onDocRendered(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(39, AppComponent_aio_dt_39_Template, 1, 1, "aio-dt", 33);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(40, AppComponent_div_40_Template, 2, 2, "div", 34);
        i0.ɵɵelementStart(41, "footer", 35);
        i0.ɵɵelement(42, "aio-footer", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(43, AppComponent_div_43_Template, 3, 0, "div", 37);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isFetching);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("transitioning", ctx.isTransitioning);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dismissOnContentClick", true);
        i0.ɵɵadvance(11);
        i0.ɵɵclassProp("starting", ctx.isStarting);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitch", ctx.isSideBySide);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isSideBySide);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.showSearchResults);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("starting", ctx.isStarting)("has-floating-toc", ctx.hasFloatingToc);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(34, _c1, !ctx.isSideBySide))("mode", ctx.mode)("opened", ctx.isOpened);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isSideBySide);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nodes", ctx.sideNavNodes)("currentNode", ctx.currentNodes == null ? null : ctx.currentNodes.SideNav)("isWide", ctx.isSideBySide);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("options", ctx.docVersions)("selected", ctx.currentDocVersion);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.pageId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("mode", ctx.deployment.mode)("version", ctx.versionInfo);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("no-animations", ctx.isStarting);
        i0.ɵɵproperty("doc", ctx.currentDocument);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dtOn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasFloatingToc);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nodes", ctx.footerNodes)("versionInfo", ctx.versionInfo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isStarting);
    } }, directives: [i8.NgIf, i9.MatToolbar, i9.MatToolbarRow, i10.NotificationComponent, i11.MatIcon, i12.MatButton, i8.NgSwitch, i8.NgSwitchCase, i8.NgSwitchDefault, i13.SearchBoxComponent, i14.MatSidenavContainer, i14.MatSidenav, i8.NgClass, i15.NavMenuComponent, i16.SelectComponent, i17.ModeBannerComponent, i18.DocViewerComponent, i19.FooterComponent, i20.MatProgressBar, i21.TopMenuComponent, i22.SearchResultsComponent, i23.DtComponent, i24.LazyCustomElementComponent], pipes: [i8.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'aio-shell',
                templateUrl: './app.component.html',
            }]
    }], function () { return [{ type: i1.Deployment }, { type: i2.DocumentService }, { type: i0.ElementRef }, { type: i3.LocationService }, { type: i4.NavigationService }, { type: i5.ScrollService }, { type: i6.SearchService }, { type: i7.TocService }]; }, { hostClasses: [{
            type: HostBinding,
            args: ['class']
        }], isStarting: [{
            type: HostBinding,
            args: ['@.disabled']
        }], searchElements: [{
            type: ViewChildren,
            args: ['searchBox, searchResultsView', { read: ElementRef }]
        }], searchBox: [{
            type: ViewChild,
            args: [SearchBoxComponent, { static: true }]
        }], sidenav: [{
            type: ViewChild,
            args: [MatSidenav, { static: true }]
        }], notification: [{
            type: ViewChild,
            args: [NotificationComponent, { static: true }]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event.target.innerWidth']]
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event.target', '$event.button', '$event.ctrlKey', '$event.metaKey', '$event.altKey']]
        }], onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }], onKeyUp: [{
            type: HostListener,
            args: ['document:keyup', ['$event.key', '$event.which']]
        }] }); })();
//# sourceMappingURL=app.component.js.map