import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/pages/modal/modal.component';
import { Users } from '../../models/usuarios.models';
import { AuthService } from '../../api/auth.service';
import { ClasesService } from '../../api/clases.service';
import { ClaseInsService } from '../../api/clase-ins.service';
import { ApiService } from '../../service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-clases',
  templateUrl: './mis-clases.component.html',
  styles: [
  ]
})
export class MisClasesComponent implements OnInit {

  public user !: Users
  public title!: string
  public msg!: string
  public class_data : any[] = []

  public displayedColumns: any[] = [];

  dataSource !: MatTableDataSource<any>

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    //* |-> Servicion para activar el modal
    private modalService: NgbModal,
    //* |-> Modelo de usuario
    private authService : AuthService,
    //* |-> Servicio API de clases
    private clasesService : ClasesService,
    //* |-> Servicio API de clases inscritas
    private clasesInsService : ClaseInsService,
    //* |-> Emisora que observa
    private emitterService : ApiService
  ) { 
    this.user = authService.users
    console.log(this.user);
    
  }

  ngOnInit(): void {    
    this.cateRoleUser()
    this.emitterService.$EmmiterClass.subscribe(
      r => {
        this.cateRoleUser()
      }
    )
  }

  //? -_ Metodo que abrira el modal
  open(){
    const modalRef = this.modalService.open(ModalComponent, { size: 'md', centered: true, windowClass: 'dark-modal' })
    modalRef.componentInstance.forms = true
    modalRef.componentInstance.title = 'Crear una nueva clase!'
  }

  //? -_ Metodo que categorizara el role para asi cargar la informacion necesaria
  cateRoleUser(){
    switch (this.user.role) {
      case 'DEFAULT-ROLE':
          this.clasesInsService.viewAllClassUser().  subscribe(
            ({data}: any) => {     
              console.log(data);
                       
              this.displayedColumns = [ 'name_entre', 'title', 'descripcion', 'opt' ]
              this.class_data = data
              this.dataSource = new MatTableDataSource(this.class_data)          
              this.dataSource.sort = this.sort;
            }
          )
        break;
      case 'ENTRE-ROLE':
          this.clasesService.viewClassEntre(this.user.id).subscribe(
            ({data}: any) => {   
              console.log(data);  
              this.displayedColumns = ['title', 'descripcion', 'cupos', 'opt' ]         
              this.class_data = data
              this.dataSource = new MatTableDataSource(this.class_data)          
              this.dataSource.sort = this.sort;
            }, err => {
              this.class_data = []
              this.msg = 'No tienes clases registradas... Registra tu primera clase ahora!'
            }
          )
        break;
      case 'ADMIN-ROLE':
          this.clasesService.viewClassEntre(this.user.id).subscribe(
            r => {
              this.displayedColumns = ['title', 'descripcion', 'cupos', 'opt' ]         
            }
          )
        break;
      default:
        break;
    }
  }
  
  //? -_ Metodo que aplicara el filtro en la tabla de las clases
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //? -_ Metodo que desinscribira a un usuario de una clase
  desuscribe(id: number, indx: number){    
    Swal.fire({
      title: 'Esta proximo a desinscribirse de esta clase',
      text: "Esta seguro que quiere remover su inscripcion de esta clase?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clasesInsService.desinscriptionClassUser(id).subscribe(
          ({msg}: string | any) => {
            this.class_data.splice(indx, 1)
            this.dataSource = new MatTableDataSource(this.class_data) 
            Swal.fire('Exito', msg, 'success')
          }, err => {
            console.log(err);
          }
        )
      }
    })
  }

  deleteClass(id: number, indx: number){    
    Swal.fire({
      title: 'Esta proximo a eliminar esta clase',
      text: "Esta seguro que quiere eliminar permanentemente esta clase?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clasesService.deleteClass(id).subscribe(
          ({msg}: string | any) => {
            this.class_data.splice(indx, 1)
            this.dataSource = new MatTableDataSource(this.class_data) 
            Swal.fire('Exito', msg, 'success')
          }, err => {
            console.log(err);
            
          }
        )
      }
    })
  }

  //? -_ Metodo que abrira el modal para editar una clase
  editModal(id_class: number){
    const modalRef = this.modalService.open(ModalComponent, { size: 'md', centered: true, windowClass: 'dark-modal' })
    modalRef.componentInstance.forms = true
    modalRef.componentInstance.title = 'Editar una clase!',
    modalRef.componentInstance.id_act = id_class
  }


}
