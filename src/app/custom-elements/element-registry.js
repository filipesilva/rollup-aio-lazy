import { InjectionToken } from '@angular/core';

export const ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES = [
    // // Comment these out to remove lazy routes.
    // // Start here:
    // {
    //     selector: 'aio-announcement-bar',
    //     loadChildren: () => import('./announcement-bar/announcement-bar.module').then(m => m.AnnouncementBarModule)
    // },
    // {
    //     selector: 'aio-api-list',
    //     loadChildren: () => import('./api/api-list.module').then(m => m.ApiListModule)
    // },
    // {
    //     selector: 'aio-contributor-list',
    //     loadChildren: () => import('./contributor/contributor-list.module').then(m => m.ContributorListModule)
    // },
    // {
    //     selector: 'aio-file-not-found-search',
    //     loadChildren: () => import('./search/file-not-found-search.module').then(m => m.FileNotFoundSearchModule)
    // },
    // {
    //     selector: 'aio-resource-list',
    //     loadChildren: () => import('./resource/resource-list.module').then(m => m.ResourceListModule)
    // },
    // {
    //     selector: 'aio-toc',
    //     loadChildren: () => import('./toc/toc.module').then(m => m.TocModule)
    // },
    // {
    //     selector: 'code-example',
    //     loadChildren: () => import('./code/code-example.module').then(m => m.CodeExampleModule)
    // },
    // {
    //     selector: 'code-tabs',
    //     loadChildren: () => import('./code/code-tabs.module').then(m => m.CodeTabsModule)
    // },
    // {
    //     selector: 'live-example',
    //     loadChildren: () => import('./live-example/live-example.module').then(m => m.LiveExampleModule)
    // }
    // // Stop here.
];
/** Injection token to provide the element path modules. */
export const ELEMENT_MODULE_LOAD_CALLBACKS_TOKEN = new InjectionToken('aio/elements-map');
/** Map of possible custom element selectors to their lazy-loadable module paths. */
export const ELEMENT_MODULE_LOAD_CALLBACKS = new Map();
ELEMENT_MODULE_LOAD_CALLBACKS_AS_ROUTES.forEach(route => {
    ELEMENT_MODULE_LOAD_CALLBACKS.set(route.selector, route.loadChildren);
});
//# sourceMappingURL=element-registry.js.map