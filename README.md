# rollup-aio-lazy

Repro for https://github.com/rollup/rollup/issues/3417.

Using lazy imports seems to cause a size increase in the eagerly imported entry point.

Repro steps:
- `git clone https://github.com/filipesilva/rollup-aio-lazy`
- `cd rollup-aio-lazy` 
- `yarn`
- `yarn test`
- the script will create two builds and list their sizes:
```
-rw-r--r-- 1 kamik 197609 131900 Mar  3 11:27 dist/lazy-0a257795.js
-rw-r--r-- 1 kamik 197609     62 Mar  3 11:27 dist/main.js
-rw-r--r-- 1 kamik 197609 746421 Mar  3 11:27 dist/main-e77baaa0.js
-rw-r--r-- 1 kamik 197609  39060 Mar  3 11:27 dist-nolazy/main-nolazy.js
```
- the only difference between these two builds is that one has a dynamic import, and the other doesn't:
```js
// src/main.js
import { MatButtonModule } from '@angular/material/button';
console.log(MatButtonModule)
import('./lazy')

// src/lazy.js
import * as i2 from "@angular/material/tabs";
console.log(i2)

// src/main-nolazy.js
import { MatButtonModule } from '@angular/material/button';
console.log(MatButtonModule)
```
- even though the module is dynamically imported, performing the dynamic import increases the size of the eagerly loaded module by 70k (~4k -> ~74k).
- having a dynamic import shouldn't alter the size of the eagerly loaded module