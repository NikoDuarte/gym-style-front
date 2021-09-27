import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../api/clases.service';
import { _data_clases } from 'src/app/interface/interface';
import { DataService } from '../../service/data.service';
import { ClaseInsService } from '../../api/clase-ins.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  

  //* |-> Propiedad que cargara el contenido de las clases
  public class_data: any[] = []
  //* |-> Propiedad booleana que mostrara o no el inscribir a clase
  public validLogIns: boolean = false

  constructor(
    //* |-> Importamos el servicio de las clases como metodo privado
    private classApi : ClasesService,
    //* |-> Importamos el servicio que realizara las operaciones nesesarias para las inscripciones a las clases
    private classInsApi : ClaseInsService
  ) {
    
  }

  ngOnInit(): void {
    //* |-> Metodo que cargara las clases 
    this.viewAllClass()
    //* |-> Condicional que validara si un usuario existe para poderce inscribir a la(s) clases
    if (localStorage.getItem('token')) {
      this.validLogIns = true
    }
  }

  //? -_ Metodo que cargara la solicitud http y almacenara la respuesta
  viewAllClass(){
    this.classApi.viewAllClass().subscribe(
      ({data}: any) => {
        this.class_data = data
      },
      err => {
        this.class_data = []
      }
    )
  }

  //? -_ Metodo que inscribira un usuario a una clase
  inscription(id: number) {    
    this.classInsApi.inscriptionClassUser(id).subscribe(
      ({msg}: string | any) => {
        Swal.fire('Exito!!', msg, 'success') 
      }, ({error:{msg}}) => {
        Swal.fire('Lo sentimos :(', msg, 'error')
      }
    )
  }

}

