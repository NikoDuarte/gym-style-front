/***********/
//*! Importaciones
  //* |-> Core de angular
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  //* |-> Components
  import { PagesComponent } from './pages.component';
  import { HomeComponent } from './home/home.component';
  import { FoundPageComponent } from './found-page/found-page.component';
  import { ClasesComponent } from './clases/clases.component';
  import { AboutComponent } from './about/about.component';
  //* |-> Modules
  import { AppRoutingModule } from '../app-routing.module';
  import { ComponentsModule } from '../components/components.module';
  import { MaterialModule } from '../material/material.module';
import { MisClasesComponent } from './mis-clases/mis-clases.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

/***********/
@NgModule({
  //* |-> Declaracion del modulo
  declarations: [
    //* |-> Declaracion del componente pages
    PagesComponent,
    HomeComponent,
    FoundPageComponent,
    ClasesComponent,
    AboutComponent,
    MisClasesComponent,
    UsuariosComponent,
  ],
  //* |-> Importaciones del modulo
  imports: [
    //* |-> CommonModule
    CommonModule,
    //* |-> AppRouting
    AppRoutingModule,
    //* |-> Compomentes
    ComponentsModule,
    //* |-> Material
    MaterialModule
  ]
})
export class PagesModule { }
