import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
   addToSession(key: string, value: string){
    sessionStorage.setItem(key, value);
  }

  deleteFromSession(key: string){
    sessionStorage.removeItem(key);
  }

  getFromSession(key: string){
    return sessionStorage.getItem(key);
  }
}
