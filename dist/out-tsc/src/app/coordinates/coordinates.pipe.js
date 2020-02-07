import { Pipe } from '@angular/core';
import { getValidTransformationType } from './getTransformationType';
import * as i0 from "@angular/core";
import * as i1 from "./coordinates.service";
export class CoordinatesPipe {
    constructor(coordinatesService) {
        this.coordinatesService = coordinatesService;
    }
    transform(value, type, direction) {
        return this.coordinatesService.transform(value, getValidTransformationType(type), direction);
    }
}
CoordinatesPipe.ɵfac = function CoordinatesPipe_Factory(t) { return new (t || CoordinatesPipe)(i0.ɵɵdirectiveInject(i1.CoordinatesService)); };
CoordinatesPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "coordinates", type: CoordinatesPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoordinatesPipe, [{
        type: Pipe,
        args: [{ name: 'coordinates' }]
    }], function () { return [{ type: i1.CoordinatesService }]; }, null); })();
//# sourceMappingURL=coordinates.pipe.js.map