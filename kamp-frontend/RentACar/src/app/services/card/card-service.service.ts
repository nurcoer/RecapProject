import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card/card';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "http://localhost:50906/api/";

  isCardExist(card : Card):Observable<ResponseModel>{
    let newPath = this.apiUrl + "cards/iscardexist";
    return this.httpClient.post<ResponseModel>(newPath,card);
  };
  getCardByNumber(cardNumber : string) : Observable<ListResponseModel<Card>>{
      let newPath = this.apiUrl + "cards/getbycardnumber?cardnumber=" + cardNumber;
      return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
  updateCard(card:Card){
    let newPath = this.apiUrl + "cards/update";
    this.httpClient.put(newPath,card);
  }
}