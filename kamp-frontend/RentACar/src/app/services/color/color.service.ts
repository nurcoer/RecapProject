import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from 'src/app/models/color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrlColor="http://localhost:50906/api/colors/getall";

  constructor( private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrlColor);
  }
}
