import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rental } from 'src/app/models/rental/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'http://localhost:50906/api/rentals/';

  constructor(private httpClient: HttpClient) {}

  getRental(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'GetRentalDetails';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalById(carId: number): Observable<SingleResponseModel<Rental>> {
    let newPath = this.apiUrl + 'GetById?id=' + carId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }
   addRental(rental:Rental){
    let newPath = this.apiUrl + 'rentals/add'
    this.httpClient.post(newPath,rental).subscribe()
  }
}
