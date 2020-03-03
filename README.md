# rollup-aio-lazy

Repro for https://github.com/rollup/rollup/issues/3417.

Using lazy imports seems to cause a size increase in the eagerly imported entry point.

Repro steps:
- `git clone https://github.com/filipesilva/rollup-aio-lazy`
- `cd rollup-aio-lazy` 
- `yarn`
- `yarn rollup --dir dist-full`
- Open `src/app/custom-elements/element-registry.js` and comment out this part:
```js
    // Comment these out to remove lazy routes.
    // Start here:
    {
        selector: 'aio-announcement-bar',
        loadChildren: () => import('./announcement-bar/announcement-bar.module').then(m => m.AnnouncementBarModule)
    },
    {
        selector: 'aio-api-list',
        loadChildren: () => import('./api/api-list.module').then(m => m.ApiListModule)
    },
    {
        selector: 'aio-contributor-list',
        loadChildren: () => import('./contributor/contributor-list.module').then(m => m.ContributorListModule)
    },
    {
        selector: 'aio-file-not-found-search',
        loadChildren: () => import('./search/file-not-found-search.module').then(m => m.FileNotFoundSearchModule)
    },
    {
        selector: 'aio-resource-list',
        loadChildren: () => import('./resource/resource-list.module').then(m => m.ResourceListModule)
    },
    {
        selector: 'aio-toc',
        loadChildren: () => import('./toc/toc.module').then(m => m.TocModule)
    },
    {
        selector: 'code-example',
        loadChildren: () => import('./code/code-example.module').then(m => m.CodeExampleModule)
    },
    {
        selector: 'code-tabs',
        loadChildren: () => import('./code/code-tabs.module').then(m => m.CodeTabsModule)
    },
    {
        selector: 'live-example',
        loadChildren: () => import('./live-example/live-example.module').then(m => m.LiveExampleModule)
    }
    // Stop here.
```
- `yarn rollup --dir dist-nolazy`
- Compare the sizes of the main file in `dist-full` and `dist-nolazy`, see the full version is ~50kb larger:
```
$ ls -la dist-full/main-rollup-91f3bcc1.js
-rw-r--r-- 1 kamik 197609 1899825 Mar  2 19:40 dist-full/main-rollup-91f3bcc1.js

$ ls -la dist-nolazy/main-rollup.js
-rw-r--r-- 1 kamik 197609 1850516 Mar  2 19:42 dist-nolazy/main-rollup.js
```
- If you are using VSCode, you can open those two files and run `File: Compare Active File With...` to see a diff between the two. Some of the extra retained symbols, like `FocusKeyManager` and `A11yModule`, are declared in `main`, unused there, exported, and only used in one of the lazy modules.