import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../service/api.service';
import { UsersService } from '../../../../api/users.service';
import { _users } from 'src/app/interface/interface';
import Swal from 'sweetalert2';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-entre-user',
  templateUrl: './form-entre-user.component.html',
  styles: [
  ]
})
export class FormEntreUserComponent implements OnInit {

  //* |-> Propiedades del formulario reactivo
  public FormUser !: FormGroup
  public hide: boolean = true;
  @Input() public title_button!: string
  @Input() public id_user: number = 0
  public role!: string

  constructor(
    //* |-> Ng Bootstrap
    public activeModal: NgbActiveModal,
    //* |-> propiedad privada para el FormBuilder
    private fb : FormBuilder,
    //* |-> Servicio que emitira un flujo booleano para cargar usuarios
    private apiService : ApiService,
    //* |-> Servicio que apuntara a la api y realizara el poste
    private userService : UsersService
  ) {
  }

  ngOnInit(): void {
    this.loadFormUser()    
    if (this.id_user !== 0) {
      this.loadInfoUser()
    }
  }

  //? -_ Metodo que carga el formulario
  loadFormUser() {
    this.FormUser = this.fb.group({
      name: [ '', [ Validators.required, Validators.minLength(3) ] ],
      email: [ '', [ Validators.required, Validators.minLength(5), Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],
      phone: [ '', [ Validators.required, Validators.minLength(8) ] ],
      password: [ '', [ Validators.required, Validators.minLength(6), Validators.maxLength(15) ] ]
    })
  }

  //? -_ Metodo que cargara la informacion del usuario a editar
  loadInfoUser(){
    this.userService.view_unique_user(this.id_user).subscribe(
      ({data}: any[] | any) => {
        const {
          user: {
            email,
            name,
            phone,
            role,
            uid
          }
        } = data[0]
        this.FormUser.setValue({name, email, phone, password: '@@@'})
        this.role = role
      }, err => {
        console.log(err);
      }
    )
  }

  //? -_ Metodo que envia la informacion
  send_user(){
    if (this.id_user === 0) {
      const new_data: _users = {
        ...this.FormUser.value,
        role: 'ENTRE-ROLE'
      }
      this.userService.create_user(new_data).subscribe(
        ({msg}: string | any) => {
          this.apiService.$EmmiterEntre.emit(true)
          Swal.fire('Exito!', msg, 'success')
          this.activeModal.close()
        }, err => {
          console.log(err);
          
        }
      )
    }else {
      const new_data = {
        ...this.FormUser.value,
        _id: this.id_user
      }
      this.userService.update_info_user(new_data).subscribe(
        ({msg}: string | any) => {
          this.apiService.$EmmiterEntre.emit(true)
          Swal.fire('Exito!', msg, 'success')
          this.activeModal.close()
        }, err => {
          console.log(err);
        }
      )
    }
  }

}
