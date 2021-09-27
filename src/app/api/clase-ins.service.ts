/**********/
//*! Importaciones
  //* |-> Core angular
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  //* |-> Variables de entorno angular
  import { environment } from '../../environments/environment';
import { ApiService } from '../service/api.service';
/**********/
//* |-> variable que almacenara la url
const base_api: string = environment.url_api_back
/**********/

@Injectable({
  providedIn: 'root'
})
export class ClaseInsService {

  //* |-> Variable privada que contendra los headers de las peticiones
  private headers: any

  constructor(
    //* |-> Cliente http que realizara las peticiones
    private http: HttpClient,
    //* |-> servicio donde se encuentran los headers
    private apiService : ApiService
  ) { 
    this.headers = apiService.header
  }

  //? -_ Metodo que mostrara todas las clases en las que se encuentra un usuario
  viewAllClassUser(){
    const api: string = `${base_api}/class/view/user-class`
      return this.http.get(api, this.headers)
  }

  //? -_ Metodo que inscribe un usuario a una clase
  inscriptionClassUser(id: number){
    console.log(this.headers);
    
    const api: string = `${base_api}/class/inscription-class/${id}`
      return this.http.post(api, '', this.headers)
  }

  //? -_ Metodo que desinscribe a un usuario de una clase
  desinscriptionClassUser(id: number){
    const api: string = `${base_api}/class/delete-ins/${id}`
      return this.http.delete(api, this.headers)
  }
}
