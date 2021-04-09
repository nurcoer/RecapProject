import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rental } from 'src/app/models/rental/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'http://localhost:50906/api/rentals/';

  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService
  ) {}

  getRental(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'GetRentalDetails';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalById(carId: number): Observable<SingleResponseModel<Rental>> {
    let newPath = this.apiUrl + 'GetByCarId?id=' + carId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }
  addRental(rental: Rental) : Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
  

  payRental(rental: Rental, amount: number):Observable<ResponseModel>  {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, {
      payment: { amount: amount },
      rental: { rental },
    });
  }
}
