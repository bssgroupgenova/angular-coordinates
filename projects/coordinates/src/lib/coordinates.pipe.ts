import { Pipe, PipeTransform } from '@angular/core';

import { CoordinatesService } from './coordinates.service';
import { Direction } from './direction.enum';
import { getValidTransformationType } from './getTransformationType';
import { TransformationType } from './transformation-type.enum';

@Pipe({ name: 'coordinates' })
export class CoordinatesPipe implements PipeTransform {
  constructor(private coordinatesService: CoordinatesService) {
  }

  transform(value: string | number | null, type?: TransformationType, direction?: Direction): string | number {
    return this.coordinatesService.transform(value, getValidTransformationType(type), direction);
  }
}
