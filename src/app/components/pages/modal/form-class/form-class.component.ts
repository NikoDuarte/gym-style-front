import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasesService } from '../../../../api/clases.service';
import Swal from 'sweetalert2';
import { ApiService } from '../../../../service/api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styles: [
  ]
})
export class FormClassComponent implements OnInit {

  //* |-> Recibira el id desde un componente padre
  @Input() public id_class: number = 0
  //* |-> Instancia del formulario
  public FormClass !: FormGroup
  //* |-> Propiedad que contrendra el nombre del boton para realizar una accion (crear o editar)
  public msg!: string
  //* |-> Propiedad validadora para tomar la accion correspondiente (crear o editar)
  private validD!: boolean

  constructor(
    //* |-> Ng Bootstrap
    public activeModal: NgbActiveModal,
    //* |-> Implementacion privada fb
    private fb : FormBuilder,
    //* |-> Servicion API donde se encuentran las funciionalidades de las clases
    private clasesServices : ClasesService,
    //* |-> Servicio donde se encuentra la variable emisora
    private apiService : ApiService
  ) { }

  ngOnInit(): void {
    this.loadFormClass()
    this.msg = 'Crear clase'
    this.validD = true
    if (this.id_class !== 0) {
      this.loadInfoClass()
      this.msg = 'Editar clase'
      this.validD = false
    }
  }

  //? -_ Metodo que carga el formulario
  loadFormClass(){
    this.FormClass = this.fb.group({
      title: [ '', [ Validators.required, Validators.minLength(3) ] ],
      descr: [ '' ],
      cupos: [ 1, [ Validators.required, Validators.min(1) ] ]
    })
  }

  //? -_ Metodo que cargara la informacion de una clase respecto a el id suministrado del componente padre
  loadInfoClass(){
    this.clasesServices.viewUniqueClass(this.id_class).subscribe(
      ({data:{clase, total_ins}}: any) => {
        const new_form = clase[0]
        this.FormClass.setValue({title: new_form.title, descr: new_form.descripcion, cupos: new_form.cupos})
      }, err => {
        console.log(err);
      }
    )
  }

  //? -_ Metodo que creara o actualizara una clase
  send_class(){
    const data = this.FormClass.value
    if (this.validD == true) {
      this.clasesServices.createClass(data).subscribe(
        ({msg}: any) => {
          Swal.fire('Exito!', msg, 'success')
          this.apiService.$EmmiterClass.emit(true)
          this.activeModal.close()
        }, ({error}) => {
          Swal.fire('Lo sentimos :(', error.msg, 'error')
        }
      )
    }else {
      this.clasesServices.updateClass(data, this.id_class).subscribe(
        ({msg}: string | any) => {
          Swal.fire('Exito!', msg, 'success')
          this.apiService.$EmmiterClass.emit(true)
          this.activeModal.close()
        }, err => {
          console.log(err);
        }
      )
    }
  }

}
