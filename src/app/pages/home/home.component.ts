import { Component, OnInit } from '@angular/core';
import { _carrusel } from 'src/app/interface/interface';
import { Users } from 'src/app/models/usuarios.models';
import { DataService } from '../../service/data.service';
import { AuthService } from '../../api/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public carrusel : _carrusel[]

  public user !: Users

  constructor(
    private carrucelData : DataService,
    private AuthService : AuthService
  ) { 
    this.carrusel = carrucelData.dataCarrusel    
  }
  
  ngOnInit(): void {
  }

}
