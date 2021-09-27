/**********/
//*! Importaciones
  //* |-> Core angular
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  //* |-> Variables de entorno angular
  import { environment } from '../../environments/environment';
import { _create_course } from '../interface/interface';
import { ApiService } from '../service/api.service';
/**********/
//* |-> variable que almacenara la url
const base_api: string = environment.url_api_back
/**********/
@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private headers: any

  constructor(
    //* |-> Cliente http que realizara las peticiones
    private http: HttpClient,
    //* |-> Configurador de los header
    private apiService : ApiService
  ) {
    this.headers = apiService.header
  }

  //? -_ Metodo que mostrara todas las clases que se encuentren en el sistema
  viewAllClass(){
    const api: string = `${base_api}/class/`
      return this.http.get(api)
  }

  //? -_ Metodo que traera todas las clases de un entrenador
  viewClassEntre(id: string){
    const api: string = `${base_api}/class/view/class-entrenador/${id}`
      return this.http.get(api, this.headers)
  }

  //? -_ Metodo que traera la informacion de una clase en especifico
  viewUniqueClass(id: number){
    const api: string = `${base_api}/class/${id}`
      return this.http.get(api)
  }

  //? -_ Metodo que creara la clase
  createClass(body: _create_course){
    const api: string = `${base_api}/class/`
      return this.http.post<_create_course>(api, body, this.headers)
  }

  //? -_ Metodo que actualizara la clase
  updateClass(body: _create_course, id: number){
    const api: string = `${base_api}/class/update-class/${id}`
      return this.http.put(api, body, this.headers)
  }

  //? -_ Metodo para eliminar las clases inscritas
  deleteClass(id: number) {
    const api: string = `${base_api}/class/delete-class/${id}`
      return this.http.delete(api, this.headers)
  }
}
