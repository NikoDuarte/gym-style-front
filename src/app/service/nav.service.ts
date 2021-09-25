import { Injectable } from '@angular/core';
import { _data_about, _menu } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  
  //* |-> Menu navbar homePages
  public menu: _menu[] = [
    {
      title: 'Inicio',
      icon: 'bx bx-home-circle',
      path: '/gym-style/home'
    },
    {
      title: 'Clases',
      icon: 'bx bxs-megaphone',
      path: '/gym-style/clases'
    },
    {
      title: '¿Quienes somos?',
      icon: 'bx bx-medal',
      path: '/gym-style/about'
    }
  ]

  //* |-> Menu de opciones del usuario
  public menu_option: _menu[] = [
    {
      title: 'Mis clases',
      path: '/gym-style/mis-clases'
    },
    {
      title: 'Usuarios',
      path: '/gym-style/usuarios'
    },
    {
      title: 'Configuraciones',
      path: '/gym-style/mis-clases'
    }
  ]

  constructor() { }
}
