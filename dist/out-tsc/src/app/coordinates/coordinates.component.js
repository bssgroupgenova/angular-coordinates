import { Component, Input } from '@angular/core';
import { getValidTransformationType } from './getTransformationType';
import * as i0 from "@angular/core";
import * as i1 from "./coordinates.pipe";
export class CoordinatesComponent {
    constructor() {
        this.internalType = getValidTransformationType();
    }
    set type(type) {
        this.internalType = getValidTransformationType(type);
    }
    get type() {
        return this.internalType;
    }
}
CoordinatesComponent.ɵfac = function CoordinatesComponent_Factory(t) { return new (t || CoordinatesComponent)(); };
CoordinatesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CoordinatesComponent, selectors: [["geo-coordinates"]], inputs: { value: "value", direction: "direction", type: "type" }, decls: 2, vars: 5, template: function CoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
        i0.ɵɵpipe(1, "coordinates");
    } if (rf & 2) {
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(1, 1, ctx.value, ctx.type, ctx.direction));
    } }, pipes: [i1.CoordinatesPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoordinatesComponent, [{
        type: Component,
        args: [{
                selector: 'geo-coordinates',
                template: '{{ value | coordinates:type:direction }}'
            }]
    }], null, { value: [{
            type: Input
        }], direction: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=coordinates.component.js.map