/**********/
//*! Importaciones
  //* |-> Core de angular
  import { Injectable, NgZone } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  //* |-> Servicios
  import { ApiService } from '../service/api.service';
  //* |-> Models
  import { Users } from '../models/usuarios.models';
  //* |-> Interface
  import { _login } from '../interface/interface';
  //* |-> Variables de ambiente
  import { environment } from 'src/environments/environment';
  //* |-> Operadores rxjs
  import { catchError, map, tap } from 'rxjs/operators';
  import { of } from 'rxjs';
import { Router } from '@angular/router';
/**********/
//* |-> Variable que almacenara el fragmento de la url api de produccion
const base_url: string = environment.url_api_back
/**********/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //* |-> Headers
  public headers: any

  //* |-> Modelo de usuarios
  public users!: Users

  constructor(
    //* |-> Servicio que retornara los headers
    private ApiService : ApiService,
    //* |-> Cliente http
    private http : HttpClient,
    //* |-> ngZone
    private ngZone : NgZone,
    //* |-> Router
    private router: Router
  ) { 
    this.headers = ApiService.header
  }

  //? -_ Metodo por el cual se iniciara sesion
  login(body: _login){
    //* |-> Variable que contendra el path al cual vamos apuntar para la api
    const url_api: string = `${base_url}/auth`
      //* |-> Retornamos un observable con la respuesta del servidor
      return this.http.post<_login>(url_api, body)
  }

  //? -_ Metodo que pedira el restablecimiento de cuenta
  ask_for_password(body: { email: string }){
    //* |-> Variable que contendra el path al cual vamos apuntar para la api
    const url_api: string = `${base_url}/auth/ask-for-password`
      //* |-> Retornamos un observable con la respuesta del servidor
      return this.http.post(url_api, body)
  }

  //? -_ Metodo que actualizara la contraseña del usuario
  update_password(body: { password: string }){
    //* |-> Variable que contendra el path al cual vamos apuntar para la api
    const url_api: string = `${base_url}/auth/re-password`
      //* |-> Retornamos un observable con la respuesta del servidor
      return this.http.put(url_api, body, this.headers)
  }

  //? -_ Metodo que validara y retornara el usuario
  info_token(){
    //* |-> Variable que contendra el path al cual vamos apuntar para la api
    const url_api: string = `${base_url}/auth/renew-token`
      //* |-> Retornamos un observable con la respuesta del servidor
      return this.http.get(url_api, this.headers).pipe(
        map( 
          ({data:{user}}: any) => {
            const {
              _id,
              name,
              email,
              role
            } = user[0]
            this.users = new Users(_id, name, email, role)                        
            return this.users
          }
        ), catchError(
          err => {
            return of(false)
          }
        )
      )
  }

  //? -_ Metodo que renovara el token
  renew_token(){
    //* |-> Variable que contendra el path al cual vamos apuntar para la api
    const url_api: string = `${base_url}/auth/renew-token`
    //* |-> Retornamos un observable con la respuesta del servidor
    return this.http.get(url_api, this.headers).pipe(
      map( 
        ({data:{user}}: any) => {
          const {
            _id,
            name,
            email,
            role
          } = user[0]
          this.users = new Users(_id, name, email, role)                        
          return true
        }
      ), catchError(
        err => {
          return of(false)
        }
      )
    )
  }

  //? -_ Metodo que eliminara el token y cerrara sesion
  logout(){
    localStorage.removeItem('token')
    this.ApiService.$Emmiter.emit(false)
    this.ngZone.run(() => this.router.navigateByUrl('/sign-in'))
  }
}
