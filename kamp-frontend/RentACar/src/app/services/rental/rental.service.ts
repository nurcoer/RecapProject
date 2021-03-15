import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrlRental="http://localhost:50906/api/rentals/GetRentalDetails"; 

  constructor(private httpClient: HttpClient) { }

  getRental():Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrlRental);
  }
}
