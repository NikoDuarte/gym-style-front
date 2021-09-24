import { Component, Input, OnInit } from '@angular/core';
import { _carrusel } from 'src/app/interface/interface';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @Input() public data !: _carrusel[]

  constructor() { }

  ngOnInit(): void {
  }

}
