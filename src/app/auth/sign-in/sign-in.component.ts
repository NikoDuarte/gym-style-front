/**********/
//*! Importaciones
  //* |-> angular core
  import { Component, NgZone, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../api/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
  //* |-> 

/**********/
//* |-> Configuracion del decorador para el componente
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
/**********/
//* |-> Clase del componente
export class SignInComponent implements OnInit {
  //* |-> Variables para uso visual
  public bg_video: string = 'https://player.vimeo.com/external/525921466.hd.mp4?s=d9e350cfcca46302df4d00fbb304030da0def6b8&profile_id=175&oauth2_token_id=57447761'
  public hide: boolean = true;
  //* |-> Variables control de formularios
  public FormLog !: FormGroup

  //* |-> Constructor
  constructor(
    //* |-> Implementacion privada del fromBuilder
    private fb : FormBuilder,
    //* |-> Servicio API para la autenticacion
    private authService : AuthService,
    //* |-> Implementacion privada del ngZone
    private ngZone : NgZone,
    //* |-> Implementacion privada del router
    private router : Router,
    //* |-> Emitter
    private emitterService : ApiService
  ) { }

  ngOnInit(): void {
    this.loadFormLog()
    this.me()
  }

  //? -_ Metodo que validara si el usuario tiene la opcion de recordarme
  me(){
    if (localStorage.getItem('email')) {
      this.FormLog.get('email')?.setValue(localStorage.getItem('email'))
    }
  }

  //? -_ Metodo que cargara la data del formulario correspondiente
  loadFormLog(){
    this.FormLog = this.fb.group({
      email: [ '', [ Validators.required, Validators.minLength(5), Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],
      password: [ '', [ Validators.required, Validators.minLength(6), Validators.maxLength(15) ] ],
      me: [ true ]
    })
  }

  //? -_ Metodo que realizara la peticion para el logueo del usuario
  login(){
    //* |-> Desestructuramos los datos
    const {email, password, me} = this.FormLog.value
    this.authService.login({email: email, password: password}).subscribe(
      async({data:{token}, msg}: any) => {
        if(me === true) localStorage.setItem('email', email)
        await localStorage.setItem('token', token)
        let timerInterval: any
        Swal.fire({
          title: `${msg}!`,
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              //* |-> Navegar al inicio de la aplicacion
              this.ngZone.run( () => {
                this.router.navigateByUrl('/gym-style/home')
              } )
            }, 300)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
        //* |-> Emitira un evento para relizar el metodo info_token
        this.emitterService.$Emmiter.emit(true)
      }, ({error}) => {        
        Swal.fire('Lo sentimos :(', error.msg, 'error')
      }
    )
  }
}
