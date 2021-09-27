/*********/
//*! Importaciones
  //* |-> Core de angular
  import { Component, Input, OnInit } from '@angular/core';
  //* |-> Interfaces
  import { _menu } from 'src/app/interface/interface';
  //* |-> Servicios
  import { NavService } from '../../../service/nav.service';
  import { ApiService } from '../../../service/api.service';
  //* |-> Modelos
  import { Users } from '../../../models/usuarios.models';
import { AuthService } from '../../../api/auth.service';
//* |-> Configuracion del decorador del componente
@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {

  //* |-> Informacion de los menu
  public menu: _menu[]
  public menu_option : _menu[] | any

  //* |-> Ingresar la informacion del usuario
  public user !: Users
  //* |-> Ingresar propiedad show boolean
  public show !: boolean

  constructor(
    //* |-> Servicio que traera la informacion de los menus
    private menus : NavService,
    //* |-> Servicio que traera el token
    private ApiService : ApiService,
    //* |-> Servicio que renovara y traera la info del token
    private authService : AuthService
  ) {
    //* |-> Configuracion y inicializacion de menus
    this.menu = menus.menu
    this.menu_option = menus.loadMenu()
    //* |-> Opcion user reactivo
  }
  
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.show = true
      this.authService.info_token().subscribe(
        (resp: any) => {
          this.user = resp
        }
      )
    }else{
      this.ApiService.$Emmiter.subscribe(
        (resp) => {
          if (localStorage.getItem('token')) {
            this.show = resp
            this.authService.info_token().subscribe(
              (resp: any) => {
                this.user = resp
              }
            )
          }
        }
      )
    }
  }

  logout(){
    this.authService.logout()
  }

}
