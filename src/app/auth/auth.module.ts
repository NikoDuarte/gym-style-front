/**********/
//*! Importaciones
  //* |-> Core angular
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  //* |-> Components
  import { SignInComponent } from './sign-in/sign-in.component';
  import { SignUpComponent } from './sign-up/sign-up.component';
  import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
  //* |-> Modules
  import { ComponentsModule } from '../components/components.module';
  import { MaterialModule } from '../material/material.module';
  import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/********/
//? -_ Decorador para la configuracion del modulo
@NgModule({
  //* |-> Que se declarada en el modulo
  declarations: [
    //* |-> Componente que mostrara el login para el usuario
    SignInComponent,
    //* |-> Componente que mostrara el registro del usuario
    SignUpComponent,
    //* |-> Componente que mostrara para que un usuario pueda restablecer la contraseña
    ForgotPassComponent
  ],
  //* |-> Que se importa en el modulo
  imports: [
    //* |-> CommonModule
    CommonModule,
    //* |-> Modulo de componentes
    ComponentsModule,
    //* |-> Modulo de Angular Material
    MaterialModule,
    //* |-> AppRouting
    AppRoutingModule,
    //* |-> Implementacion del formularios
    FormsModule,
    //* |-> Implementacion de formularios reactivos
    ReactiveFormsModule
  ]
})
//* |-> Exportacion del modulo
export class AuthModule { }
