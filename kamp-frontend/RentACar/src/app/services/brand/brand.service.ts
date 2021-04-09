import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from 'src/app/models/brand/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'http://localhost:50906/api/brands/';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand: Brand):Observable<ResponseModel> {
    let newPath = this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
   updateBrand(brand: Brand):Observable<ResponseModel> {
     let newPath = this.apiUrl+"update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
  getById(brandId:number):Observable<SingleResponseModel<Brand>>{
     let newPath = this.apiUrl+"getbyid?id="+brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
}
