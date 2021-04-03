import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customer } from 'src/app/models/customer/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrlCustomer = "http://localhost:50906/api/customers/getall";

  constructor(private httpClient: HttpClient) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrlCustomer);
  }
}
