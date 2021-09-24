import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _user } from 'src/app/interface/interface';
import { UsersService } from '../../api/users.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthService } from '../../api/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {

  //* |-> Variables para la funcionalidad UI
  public hide: boolean = true;
  public bg_video: string = 'https://player.vimeo.com/external/496706270.hd.mp4?s=c2c34e9f5b7a364cbd2b75cc78d572460606ee31&profile_id=172&oauth2_token_id=57447761'

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
    this.loadFormUsers()
    //* |-> El fomulario de medicos
    this.loadFormMedico()
  }

  //* |-> Cargara el foumulario de usuarios
  loadFormUsers(){
    this.FormUser = this.fb.group({
      name: [ '', [ Validators.required, Validators.minLength(3) ] ],
      email: [ '', [ Validators.required, Validators.minLength(5), Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],
      phone: [ '', [ Validators.required, Validators.minLength(8) ] ],
      password: [ '', [ Validators.required, Validators.minLength(6), Validators.maxLength(15) ] ]
    })
  }

  //* |-> Cargara el formulario para la informcion del medico
  loadFormMedico(){
    this.FormMedico = this.fb.group({
      limitaciones: [ '', [ Validators.required ] ],
      medicamentos: [ '', Validators.required ],
      contacto: [ '', [ Validators.required, Validators.minLength(8) ] ],
      eps: [ '', [ Validators.required ] ]
    })
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
