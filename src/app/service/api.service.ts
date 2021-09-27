import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public $Emmiter : EventEmitter<boolean> = new EventEmitter()
  public $EmmiterClass : EventEmitter<boolean> = new EventEmitter()

  constructor() { }
  
  //? -_ Getters
    //* |-> Retornara el token del localstorage
    get token(): string {
      return localStorage.getItem('token') || ''
    }
    //* |-> Retornar header
    get header() {
      return {
        headers: {
          'auth-gym': this.token,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    }
}
