import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail/carDetail';

@Pipe({
  name: 'carFilter',
})
export class CarFilterPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (p) =>
            p.carName.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            p.colorName.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            p.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
