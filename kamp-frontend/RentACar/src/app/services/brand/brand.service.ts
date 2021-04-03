import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from 'src/app/models/brand/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrlBrand= "http://localhost:50906/api/brands/getall";

  constructor(private httpClient : HttpClient ){ }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrlBrand)
  }
}
