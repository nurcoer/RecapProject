import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'http://localhost:50906/api/';

  //private bu classta kullanımını sağlar başka classtan erişim engeli koyar.
  constructor(private httpClient: HttpClient) { }



  getCars():Observable<ListResponseModel<Car>> { 

    let newPath= this.apiUrl+'cars/getall';
    //js observable tasarım desenine ihtiyaç duyar
    //subscribe = buna subscribe olmak isteyen kim compnewPath);
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>> { 
    let newPath= this.apiUrl+'cars/GetCarsByBrandId?id='+brandId;
    //js observable tasarım desenine ihtiyaç duyar
    //subscribe = buna subscribe olmak isteyen kim component
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

   getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>> { 
    let newPath= this.apiUrl+'cars/GetCarsByColorId?id='+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsDetail():Observable<ListResponseModel<CarDetail>> {
    let newPath= this.apiUrl+'cars/GetCarDetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath= this.apiUrl+'cars/GetCarDetail?id='+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}