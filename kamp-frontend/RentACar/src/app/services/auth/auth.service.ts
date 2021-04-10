import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from 'src/app/models/auth/tokenmodel';
import { LoginModel } from 'src/app/models/auth/loginModel';
import { RegisterModel } from 'src/app/models/auth/registerModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { LocalService } from 'src/app/services/storages/localStorage/local.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:50906/api/auth/';
  jwtHelper: JwtHelperService = new JwtHelperService();
  userName: string;
  userId: number;
  roles: string[];

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalService
  ) {
    this.setUserId();
    this.setRoles();
  }

  register(user: RegisterModel) {
    let newPath = this.apiUrl + 'register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, user);
  }

  login(user: LoginModel) {
    let newPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, user);
  }

  isAuthenticated() {
    if (this.localStorageService.getStorage('token')) {
      return true;
    } else {
      return false;
    }
  }
  setUserId() {
    if (this.localStorageService.getStorage('token')) {
      var decoded = this.jwtHelper.decodeToken(
        this.localStorageService.getStorage('token')
      );
      var id = Object.keys(decoded).filter((x) =>
        x.endsWith('/nameidentifier')
      )[0];
      this.userId = Number(decoded[id]);
    }
  }

  getUserId(): number {
    return this.userId;
  }

  setRoles() {
    if (this.localStorageService.getStorage('token')) {
      var decoded = this.jwtHelper.decodeToken(
        this.localStorageService.getStorage('token')
      );
      var role = Object.keys(decoded).filter((x) => x.endsWith('/role'))[0];
      this.roles = decoded[role];
    }
  }

  isAdmin() {
      if (this.roles.includes('admin')) {
        return true;
      }
      return false; 
    }
}
