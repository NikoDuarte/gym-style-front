/*********/
//*! Importaciones
  //* |-> Core de Angular
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  //* |-> Variables de ambiente
  import { environment } from 'src/environments/environment';
  //* |-> Interfaces
  import { _update_user, _user } from '../interface/interface';
  //* |-> Servicios
  import { ApiService } from '../service/api.service';

//* |-> Variable que almacenara el fragmento de la url api de produccion
const base_api: string = environment.url_api_back

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //* |-> Headers
  public headers: any

  constructor(
    //* |-> clase que contendra los servicios getter que se requieran
    private ApiService : ApiService,
    //* |-> Cliente http
    private http : HttpClient
  ) { 
    //* |-> Inicializacion de los headers
    this.headers = ApiService.header
  }

  //? -_ Metodo que creara al usuario
  create_user(body: _user){
    //* |-> Creamos la variable que contendra el path del endpoint al cual queremos apuntar en la api
    const url_api: string = `${base_api}/user/`
      //* |-> Retornaremos un observable de la respuesta de la peticion que se envio
      return this.http.post<_user>(url_api, body)
  }

  //? -_ Metodo que vera un usuario segun el id
  view_unique_user(id: string){
    //* |-> Creamos la variable que contendra el path del endpoint al cual queremos apuntar en la api
    const url_api: string = `${base_api}/view/${id}`
      //* |-> Retornaremos un observable de la respuesta de la peticion que se envio
      return this.http.get(url_api, this.headers)
  }

  //? -_ Metodo que mostrara todos los usuarios registrados en el sistema
  view_all_user(){
    //* |-> Creamos la variable que contendra el path del endpoint al cual queremos apuntar en la api
    const url_api: string = `${base_api}/user/all-users`
      //* |-> Retornaremos un observable de la respuesta de la peticion que se envio
      return this.http.get(url_api, this.headers)
  }

  //? -_ Metodo que actualizara la informacion del usuario segun el id
  update_info_user(body: _update_user){
    //* |-> Creamos la variable que contendra el path del endpoint al cual queremos apuntar en la api
    const url_api: string = `${base_api}/user/update/${body._id}`
      //* |-> Retornaremos un observable de la respuesta de la peticion que se envio
      return this.http.put(url_api, this.headers) 
  }

  //? -_ Metodo que eliminara el usuario segun el id
  delete_user(id: string){
    //* |-> Creamos la variable que contendra el path del endpoint al cual queremos apuntar en la api
    const url_api: string = `${base_api}/user/${id}`
      //* |-> Retornaremos un observable de la respuesta de la peticion que se envio
      return this.http.delete(url_api, this.headers) 
  }
}
