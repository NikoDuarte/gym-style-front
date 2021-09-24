/**********/
//*! Importaciones
  //* |-> Core de angular
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  //* |-> Modulos
  import { AppRoutingModule } from './app-routing.module';
  import { AuthModule } from './auth/auth.module';
  import { PagesModule } from './pages/pages.module';
  //* |-> Componentes
  import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**********/
@NgModule({
  //* |-> Declaraciones del modulo
  declarations: [
    AppComponent
  ],
  //* |-> Importaciones del modulo
  imports: [
    //* |-> BrowserModule
    BrowserModule,
    //* |-> AppRoutingModule
    AppRoutingModule,
    //* |-> BrowserAnimations
    BrowserAnimationsModule,
    //* |-> PagesModule
    PagesModule,
    //* |-> AuthModule
    AuthModule,
    //* |-> ComponenstModules
    ComponentsModule,
    //* |-> Http client Module
    HttpClientModule,
    //* |-> Formularios
    FormsModule,
    //* |-> Forms Reactivos
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
