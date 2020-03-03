import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { first, map, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "app/shared/logger.service";
/**
 * Wrapper around the prettify.js library
 */
export class PrettyPrinter {
    constructor(logger) {
        this.logger = logger;
        this.prettyPrintOne = from(this.getPrettyPrintOne()).pipe(share());
    }
    getPrettyPrintOne() {
        const ppo = window['prettyPrintOne'];
        return ppo ? Promise.resolve(ppo) :
            // `prettyPrintOne` is not on `window`, which means `prettify.js` has not been loaded yet.
            // Import it; ad a side-effect it will add `prettyPrintOne` on `window`.
            import('assets/js/prettify.js')
                .then(() => window['prettyPrintOne'], err => {
                const msg = `Cannot get prettify.js from server: ${err.message}`;
                this.logger.error(new Error(msg));
                // return a pretty print fn that always fails.
                return () => { throw new Error(msg); };
            });
    }
    /**
     * Format code snippet as HTML
     * @param {string} code - the code snippet to format; should already be HTML encoded
     * @param {string} [language] - The language of the code to render (could be javascript, html, typescript, etc)
     * @param {string|number} [linenums] - Whether to display line numbers:
     *  - false: don't display
     *  - true: do display
     *  - number: do display but start at the given number
     * @returns Observable<string> - Observable of formatted code
     */
    formatCode(code, language, linenums) {
        return this.prettyPrintOne.pipe(map(ppo => {
            try {
                return ppo(code, language, linenums);
            }
            catch (err) {
                const msg = `Could not format code that begins '${code.substr(0, 50)}...'.`;
                console.error(msg, err);
                throw new Error(msg);
            }
        }), first());
    }
}
PrettyPrinter.ɵfac = function PrettyPrinter_Factory(t) { return new (t || PrettyPrinter)(i0.ɵɵinject(i1.Logger)); };
PrettyPrinter.ɵprov = i0.ɵɵdefineInjectable({ token: PrettyPrinter, factory: PrettyPrinter.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PrettyPrinter, [{
        type: Injectable
    }], function () { return [{ type: i1.Logger }]; }, null); })();
//# sourceMappingURL=pretty-printer.service.js.map