import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  
  addStorage(key: string, value: string){
    localStorage.setItem(key, value);
  }

  deleteStorage(key: string){
    localStorage.removeItem(key);
  }

  getStorage(key: string){
    return localStorage.getItem(key);
  }
  clean(){
    localStorage.clear();
  }
}
