/**********/
//*! Importaciones
  //* |-> Core de angular
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  //* |-> Componentes
    //? -_ Navbar
    import { NavbarComponent } from './shared/navbar/navbar.component';
    //* |-> Componente de pages
    import { NavbarPageComponent } from './pages/navbar-page/navbar-page.component';
    //? -_ Footer
    import { FooterComponent } from './shared/footer/footer.component';
    //? -_ Background video
    import { BgVideoComponent } from './shared/bg-video/bg-video.component';
  //* |-> Modules
    //? -_ AppRouting
    import { AppRoutingModule } from '../app-routing.module';
import { CarruselComponent } from './pages/carrusel/carrusel.component';
import { MaterialModule } from '../material/material.module';
import { TableCourseComponent } from './pages/table-course/table-course.component';
import { ModalComponent } from './pages/modal/modal.component';
import { FormClassComponent } from './pages/modal/form-class/form-class.component';
import { FormEntreUserComponent } from './pages/modal/form-entre-user/form-entre-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**********/
//? -_ Decorador de la configuracion del modulo
@NgModule({
  //* |-> Declaraciones del modulo
  declarations: [
    //* |-> Declaracion de componente navbar
    NavbarComponent,
    //* |-> Declaracion de componente footer
    FooterComponent,
    //* |-> Declaracion de componente backgound video
    BgVideoComponent,
    //* |-> Declaracion de componente navbar de pages
    NavbarPageComponent,
    //* |-> Declaracion de componente carrusel
    CarruselComponent,
    //* |-> Declaracion de componente tabla de cursos
    TableCourseComponent,
    ModalComponent,
    FormClassComponent,
    FormEntreUserComponent
  ],
  //* |-> Exportaciones del modulo
  exports: [
    //* |-> Exportacion de componente navbar
    NavbarComponent,
    //* |-> Exportacion de componente footer
    FooterComponent,
    //* |-> Exportacion de componente bgVideo
    BgVideoComponent,
    //* |-> Exportacion de componente navbar de pages
    NavbarPageComponent,
    //* |-> Exportacion de componente carrusel
    CarruselComponent,
    //* |-> Exportacion de componente tabla de cursos
    TableCourseComponent
  ],
  //* |-> Importaciones del modulo
  imports: [
    //* |-> CommonModule
    CommonModule,
    //* |-> AppRoutinModels
    AppRoutingModule,
    //* |-> Material
    MaterialModule,
    //* |-> Modulo de formularios
    FormsModule,
    //* |-> Modulo de formularios reactivos
    ReactiveFormsModule
  ]
})
//* |-> Exportacion de el modulo
export class ComponentsModule { }
