import { Injectable } from '@angular/core';
import {LocalService} from 'src/app/services/storages/localStorage/local.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   let token= this.localStorageService.getStorage('token');
   let newRequest: HttpRequest<unknown>;
   newRequest=request.clone({
     headers: request.headers.set('Authorization',"Bearer "+token)
   })
    return next.handle(newRequest);
  }
}
