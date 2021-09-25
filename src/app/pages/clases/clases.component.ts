import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../api/clases.service';
import { _data_clases } from 'src/app/interface/interface';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  

  //* |-> Variable que cargara el contenido de las clases
  public class_data: any[] = []
  

  public dataClases: _data_clases[] = []


  constructor(
    //* |-> Importamos el servicio de las clases como metodo privado
    private classApi : ClasesService,

    private data : DataService

  ) {this.dataClases= data.clasesData }

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

