import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Observable } from 'rxjs';
import{SingleResponseModel} from 'src/app/models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:50906/api/users';

  constructor(private httpClient: HttpClient) { }



  getUserById(userId:number):Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + '/getbyuser?userId=' + userId;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);

  }

  userUpdate(user:User):Observable<SingleResponseModel<User>>{
let newPath = this.apiUrl + '/update';
    return this.httpClient.post<SingleResponseModel<User>>(newPath, user);
  }
}
