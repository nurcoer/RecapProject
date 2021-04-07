import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/carDetail/carDetail';

import { CarService } from 'src/app/services/Car/car.service';



//axios,fetch
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

//ngOninit component ilk kez açıldığında dom'a yerleştiğinde çalışan method
//constructor amacı productComponenti bellekte oluşturmaktır.
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  currentCar: Car;
  filterText: string;
  filterColor: string;
  filterBrand: string;
  imageBasePath = 'http://localhost:50906//images/';

  //mevcut rooute değişen değer brandId
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else if (params['brandId'] && params['colorId']) {
      } else {
        this.getCarsDetail();
        if (params['filterText']) {
          this.filterText = params['filterText'];
        }
        if (params['brand'] && params['color']) {
          this.filterColor = params['color'];
          this.filterBrand = params['brand'];
        }
      }
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetail() {
    this.carService.getCarsDetail().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
