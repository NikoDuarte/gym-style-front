import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasesService } from '../../api/clases.service';
import { _data_clases } from 'src/app/interface/interface';
import Swal from 'sweetalert2';
import { AuthService } from '../../api/auth.service';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styles: [
  ]
})
export class ClaseComponent implements OnInit {

  //* |-> Propiedad que almacenara la clase que responde el servico api
  public data!: _data_clases
  //* |-> Propiedad que almacenara el total de inscritos el x clase
  public insc : number = 0
  //* |-> Propiedad que almacenara el id que se encuentra en los parametros
  private id_class!: number
  //* |-> Propiedad que almacenara los parametros del usuario
  public user : any

  constructor(
    //* |-> Metodo que captura los parametros de una url
    private actRoute : ActivatedRoute,
    //* |-> Servicos api para el control de las clases
    private clasesServices : ClasesService,
    //* |-> Metodo que podremos usar para el cambio de rutas url
    private router : Router,
    //* |-> Servicio api que traera las propiedades del usuario
    private authService : AuthService
  ) {
    this.user = authService.users
    console.log(this.user);
    
  }

  ngOnInit(): void {
    //* |-> Capturaremos el id suministrado en la url
    this.actRoute.params.subscribe(
      ({id}) => {
        this.id_class = id
        this.loadClassUnique(id)
      }
    )
  }

  //? -_ Metodo que cargara la clase segun el id suministrado
  loadClassUnique(id: string){
    this.clasesServices.viewUniqueClass(Number(id)).subscribe(
      ({data:{clase, total_ins}}: any) => {
        this.data = clase[0]
        this.insc = total_ins
      }
    )
  }

  //? -_ Metodo que eliminara una clase
  deleteClass(){    
    Swal.fire({
      title: 'Esta proximo a eliminar esta clase',
      text: "Esta seguro que quiere eliminar permanentemente esta clase?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clasesServices.deleteClass(this.id_class).subscribe(
          ({msg}: string | any) => {
            Swal.fire('Exito', msg, 'success')
            this.router.navigateByUrl('/gym-style/clases')
          }, err => {
            console.log(err);
          }
        )
      }
    })
  }

}
