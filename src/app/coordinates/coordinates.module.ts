import { NgModule } from '@angular/core';

import { CoordinatesComponent } from './coordinates.component';
import { CoordinatesPipe } from './coordinates.pipe';
import { CoordinatesService } from './coordinates.service';

@NgModule({
  providers: [CoordinatesService],
  exports: [CoordinatesComponent, CoordinatesPipe, CoordinatesService],
  declarations: [CoordinatesComponent, CoordinatesPipe]
})
export class CoordinatesModule { }
