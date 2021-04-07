import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'http://localhost:50906/api/';

  //private bu classta kullanımını sağlar başka classtan erişim engeli koyar.
  constructor(private httpClient: HttpClient) { }

 getCarsDetail():Observable<ListResponseModel<CarDetail>> {
    let newPath= this.apiUrl+'cars/GetCarDetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCar(carId:number):Observable<SingleResponseModel<Car>> { 

    let newPath= this.apiUrl+'cars/GetById?id='+carId;
    //js observable tasarım desenine ihtiyaç duyar
    //subscribe = buna subscribe olmak isteyen kim componenet );
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>> { 
    let newPath= this.apiUrl+'cars/GetCarsByBrandId?id='+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

   getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>> { 
    let newPath= this.apiUrl+'cars/GetCarsByColorId?id='+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

 

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath= this.apiUrl+'cars/GetCarDetail?id='+carId;
    return   this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  } 
}

