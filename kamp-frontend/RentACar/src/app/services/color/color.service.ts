import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from 'src/app/models/color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="http://localhost:50906/api/colors";

  constructor( private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color: Color):Observable<ResponseModel> {
    let newPath = this.apiUrl+"/add";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
  updateColor(color: Color):Observable<ResponseModel> {
    let newPath = this.apiUrl+"/update";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
  getById(colorId:number):Observable<SingleResponseModel<Color>>{
    let newPath = this.apiUrl+"/getbyid?id="+colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }
}
