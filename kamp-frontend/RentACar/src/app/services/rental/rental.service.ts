import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rental } from 'src/app/models/rental/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrlRental="http://localhost:50906/api/rentals/GetRentalDetails"; 

  constructor(private httpClient: HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrlRental);
  }
}
