import { ModuleWithProviders, NgModule } from '@angular/core';

import { CoordinatesComponent } from './coordinates.component';
import { CoordinatesPipe } from './coordinates.pipe';
import { CoordinatesService } from './coordinates.service';

@NgModule({
  providers: [CoordinatesService],
  exports: [CoordinatesComponent, CoordinatesPipe],
  declarations: [CoordinatesComponent, CoordinatesPipe]
})
export class CoordinatesModule {
  static forRoot(): ModuleWithProviders<CoordinatesModule> {
    return {
      ngModule: CoordinatesModule,
      providers: [CoordinatesService]
    };
  }
}
