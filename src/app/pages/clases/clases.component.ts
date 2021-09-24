import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../api/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  //* |-> Variable que cargara el contenido de las clases
  public class_data: any[] = []

  constructor(
    //* |-> Importamos el servicio de las clases como metodo privado
    private classApi : ClasesService
  ) { }

  ngOnInit(): void {
    this.viewAllClass()
  }

  //? -_ Metodo que cargara la solicitud http y almacenara la respuesta
  viewAllClass(){
    this.classApi.viewAllClass().subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        this.class_data = []
      }
    )
  }

}
