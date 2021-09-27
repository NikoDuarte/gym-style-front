import { HttpClient } from '@angular/common/http';
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

  public menu_user: _menu[] = []

  constructor(
  ) {    
  }

  loadMenu(){
    return this.menu_user = JSON.parse(localStorage.getItem('menu')!)
  }

}
