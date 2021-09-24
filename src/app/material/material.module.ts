/**********/
//*! Importaciones
  //* |-> Core de angular
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  //* |-> Material
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatIconModule } from '@angular/material/icon';
  import { MatInputModule } from '@angular/material/input';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import {MatNativeDateModule} from '@angular/material/core';
  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatSelectModule} from '@angular/material/select';
  import {MatStepperModule} from '@angular/material/stepper';
  import {MatTooltipModule} from '@angular/material/tooltip';
  import {MatMenuModule} from '@angular/material/menu';
  import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [],
   exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatMenuModule,
    MatTableModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
