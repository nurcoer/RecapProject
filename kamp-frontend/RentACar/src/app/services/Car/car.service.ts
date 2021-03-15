import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';
import { CarDetailResponseModel } from 'src/app/models/carDetail/carDetailResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'http://localhost:50906/api/cars/getall';
  apiUrlCarDetail = "http://localhost:50906/api/cars/GetCarDetails"

  //private bu classta kullanımını sağlar başka classtan erişim engeli koyar.
  constructor(private httpClient: HttpClient) { }



  getCars():Observable<CarResponseModel> { 
    //js observable tasarım desenine ihtiyaç duyar
    //subscribe = buna subscribe olmak isteyen kim component
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }

  getCarsDetail():Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrlCarDetail);
  }
}