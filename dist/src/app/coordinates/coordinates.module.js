import { NgModule } from '@angular/core';
import { CoordinatesComponent } from './coordinates.component';
import { CoordinatesPipe } from './coordinates.pipe';
import { CoordinatesService } from './coordinates.service';
import * as i0 from "@angular/core";
export class CoordinatesModule {
    static forRoot() {
        return {
            ngModule: CoordinatesModule,
            providers: [CoordinatesService]
        };
    }
}
CoordinatesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoordinatesModule });
CoordinatesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoordinatesModule_Factory(t) { return new (t || CoordinatesModule)(); }, providers: [CoordinatesService] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoordinatesModule, { declarations: [CoordinatesComponent, CoordinatesPipe], exports: [CoordinatesComponent, CoordinatesPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoordinatesModule, [{
        type: NgModule,
        args: [{
                providers: [CoordinatesService],
                exports: [CoordinatesComponent, CoordinatesPipe],
                declarations: [CoordinatesComponent, CoordinatesPipe]
            }]
    }], null, null); })();
//# sourceMappingURL=coordinates.module.js.map