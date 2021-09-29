import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _user } from 'src/app/interface/interface';
import { UsersService } from '../../../../api/users.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../api/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-entre-user',
  templateUrl: './form-entre-user.component.html',
  styles: [
  ]
})
export class FormEntreUserComponent implements OnInit {

  //* |-> Variables para el control de formulario
  public FormUser !: FormGroup
  public FormMedico !: FormGroup

  constructor(
    //* |-> Implementacion privada del formbuider
    private fb : FormBuilder,
    //* |-> Implementacion privada para el servicio de usuarios API
    private usersService : UsersService,
    //* |-> Implementacion privada del router
    private router : Router,
    //* |-> Implementacion privada para el servicio de auth API
    private AuthService : AuthService
  ) { }

  //* |-> Al iniciar el componente cargara
  ngOnInit(): void {
    //* |-> El formulario de usuarios
    
    //* |-> El fomulario de medicos

  }

  //* |-> Metodo que realizara la peticion para la creacion del usuario
  create_user(){
    //* |-> Instanciamos la informacion de los formularios en una variable
    const data: _user = {
      //* |-> Resultados del formulario de usuario
      ...this.FormUser.value,
      //* |-> Definicion del role
      role: 'ENTRE-ROLE',
      //* |-> Resultados del formulario de medico
      ...this.FormMedico.value
    }
    //* |-> Realizamos la peticion http al endpoint para crear usuarios
    this.usersService.create_user(data).subscribe(
    //* |-> Devolvera una respuesta o un error
      //* |-> Respueta sin tipado
      (resp: any) => {
        //* |-> Mostramos una alerta al usuario para informarle que el usuario se creo correctamente
        Swal.fire('Exito!', resp.msg, 'success')
        //* |-> Redirigimos a la pantalla de inicio
        this.router.navigateByUrl('/gym-style/home')
      }, ({error}) => {
        //* |-> Mostraremos una alerta con el error ap usuario
        Swal.fire('Lo sentimos :(', error.msg, 'error')
      }
    )
  }
}

