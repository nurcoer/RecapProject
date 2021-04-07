import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { Car } from 'src/app/models/car/car';
import { CarService } from 'src/app/services/Car/car.service';
import { CarImagesService } from 'src/app/services/carImages/car-images.service';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carDetail/carImages';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetail: CarDetail[]= [];
  carImages: CarImage[] = [];
  car: Car;
  dataLoaded = false;
  imageBasePath = 'http://localhost:50906//images/';

  constructor(
    private CarImagesService: CarImagesService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImages(params['carId']);
        this.getCar(params['carId'])
      }
    });
  }

  getCarImages(carId: number) {
    this.CarImagesService.getCarImages(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetail(carId: number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getCar(carId: number){
    this.carService.getCar(carId).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded=true;
    });
  }

}
