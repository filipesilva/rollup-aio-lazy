import { InjectionToken, Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { of } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
/**
 * Use SVG_ICONS (and SvgIconInfo) as "multi" providers to provide the SVG source
 * code for the icons that you wish to have preloaded in the `CustomIconRegistry`
 * For compatibility with the MdIconComponent, please ensure that the SVG source has
 * the following attributes:
 *
 * * `xmlns="http://www.w3.org/2000/svg"`
 * * `focusable="false"` (disable IE11 default behavior to make SVGs focusable)
 * * `height="100%"` (the default)
 * * `width="100%"` (the default)
 * * `preserveAspectRatio="xMidYMid meet"` (the default)
 *
 */
export const SVG_ICONS = new InjectionToken('SvgIcons');
const DEFAULT_NS = '$$default';
/**
 * A custom replacement for Angular Material's `MdIconRegistry`, which allows
 * us to provide preloaded icon SVG sources.
 */
export class CustomIconRegistry extends MatIconRegistry {
    constructor(http, sanitizer, document, svgIcons) {
        super(http, sanitizer, document);
        this.preloadedSvgElements = { [DEFAULT_NS]: {} };
        this.loadSvgElements(svgIcons);
    }
    getNamedSvgIcon(iconName, namespace) {
        const nsIconMap = this.preloadedSvgElements[namespace || DEFAULT_NS];
        const preloadedElement = nsIconMap && nsIconMap[iconName];
        return preloadedElement
            ? of(preloadedElement.cloneNode(true))
            : super.getNamedSvgIcon(iconName, namespace);
    }
    loadSvgElements(svgIcons) {
        const div = document.createElement('DIV');
        svgIcons.forEach(icon => {
            const ns = icon.namespace || DEFAULT_NS;
            const nsIconMap = this.preloadedSvgElements[ns] || (this.preloadedSvgElements[ns] = {});
            // SECURITY: the source for the SVG icons is provided in code by trusted developers
            div.innerHTML = icon.svgSource;
            nsIconMap[icon.name] = div.querySelector('svg');
        });
    }
}
CustomIconRegistry.ɵfac = function CustomIconRegistry_Factory(t) { return new (t || CustomIconRegistry)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(DOCUMENT, 8), i0.ɵɵinject(SVG_ICONS)); };
CustomIconRegistry.ɵprov = i0.ɵɵdefineInjectable({ token: CustomIconRegistry, factory: CustomIconRegistry.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomIconRegistry, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.DomSanitizer }, { type: Document, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [SVG_ICONS]
            }] }]; }, null); })();
//# sourceMappingURL=custom-icon-registry.js.map