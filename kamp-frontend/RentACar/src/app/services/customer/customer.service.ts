import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import{SingleResponseModel} from 'src/app/models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'http://localhost:50906/api/';

  constructor(private httpClient: HttpClient) {}

  getCustomer(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'customers/getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerById(customerId: number): Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + 'customers/GetById?customerId=' + customerId;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
