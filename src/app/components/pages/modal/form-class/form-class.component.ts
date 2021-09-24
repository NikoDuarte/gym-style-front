import { Component, OnInit } from '@angular/core';
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

  //* |-> Instancia del formulario
  public FormClass !: FormGroup

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
  }

  //? -_ Metodo que carga el formulario
  loadFormClass(){
    this.FormClass = this.fb.group({
      title: [ '', [ Validators.required, Validators.minLength(3) ] ],
      descr: [ '' ],
      cupos: [ 1, [ Validators.required, Validators.min(1) ] ]
    })
  }

  //? -_ Metodo que creara o actualizara una clase
  send_class(){
    const data = this.FormClass.value
    this.clasesServices.createClass(data).subscribe(
      ({msg}: any) => {
        Swal.fire('Exito!', msg, 'success')
        this.apiService.$EmmiterClass.emit(true)
        this.activeModal.close()
      }, ({error}) => {
        Swal.fire('Lo sentimos :(', error.msg, 'error')
      }
    )
  }

}
