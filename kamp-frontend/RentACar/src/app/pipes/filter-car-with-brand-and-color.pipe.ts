import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail/carDetail';

@Pipe({
  name: 'filterCarWithBrandAndColor'
})
export class FilterCarWithBrandAndColorPipe implements PipeTransform {

  transform(value: CarDetail[], filterBrand: string,filterColor:string): CarDetail[] {
    filterColor = filterColor ? filterColor.toLocaleLowerCase() : '';
    filterBrand = filterBrand ? filterBrand.toLocaleLowerCase() : '';
    return filterBrand && filterColor
      ? value.filter(
          (p) =>
            p.colorName.toLocaleLowerCase().indexOf(filterColor) !== -1 &&
            p.brandName.toLocaleLowerCase().indexOf(filterBrand) !== -1
        )
      : value;
  }

}
