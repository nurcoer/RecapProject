import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarImage } from 'src/app/models/carDetail/carImages';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImagesService {
  apiUrl = 'http://localhost:50906/api/';
  constructor(private httpClient: HttpClient) { }

  getCarImages(id:number):Observable<ListResponseModel<CarImage>> {
    let newPath= this.apiUrl+'carImages/getcarimages?id='+id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
