import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ColorService } from 'src/app/services/color/color.service';

import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
@Component({
  selector: 'app-cars-filters',
  templateUrl: './cars-filters.component.html',
  styleUrls: ['./cars-filters.component.css'],
})
export class CarsFiltersComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  currentBrand: string ;
  currentColor: string;

  constructor(
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentBrand() {
    this.currentBrand = '';
  }
 
  setCurrentColor() {
    this.currentColor = '';
  }
  
  setRouter() {
     if(this.currentColor&& this.currentBrand) {
      return '/cars/'+this.currentBrand+'/'+this.currentColor;
    }else if (this.currentBrand) {
       return'/cars/'+this.currentBrand;
    } else if (this.currentColor) {
      return '/cars/'+this.currentColor;
    } else{
      return '/cars';
    }
    this.setCurrentColor();
    this.setCurrentBrand();
  }
}
