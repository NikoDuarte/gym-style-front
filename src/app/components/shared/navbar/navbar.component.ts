/*********/
//*! Importaciones
  //* Core angular
  import { Component, Input, OnInit } from '@angular/core';
/*********/
//* |-> Decorador de configuracion para el componente
@Component({
  //* |-> Selector html
  selector: 'app-navbar',
  //* |-> Templete que cargara
  templateUrl: './navbar.component.html',
  //* |-> Estilos que cargara
  styleUrls: ['./navbar.component.css']
})
/*********/
//? -_ Controlador del componente
export class NavbarComponent implements OnInit {
  //* |-> Variables del componente
  @Input() public type_menu!: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
