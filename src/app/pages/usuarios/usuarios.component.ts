import { Component, OnInit, ViewChild } from '@angular/core';
import { _users } from 'src/app/interface/interface';
import { UsersService } from '../../api/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/pages/modal/modal.component';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  //* |-> Propiedad que almacenara a los usuarios entrantes de la api
  public users!: _users[]

  public displayedColumns: any[] = ['name', 'email', 'role', 'opt'];

  dataSource !: MatTableDataSource<any>

  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    //* |-> Servicio api donde se encontraran las funcionalidades del usuario
    private userService : UsersService,
    //* |-> Servicion para activar el modal
    private modalService: NgbModal,
    //* |-> Servicio que recibira la informacion emisora
    private apiService : ApiService
  ) { }

  ngOnInit(): void {
    this.loadAllUser()
    this.apiService.$EmmiterEntre.subscribe(
      r => {
        this.loadAllUser()
      }, err => {
        console.log(err);
      }
    )
  }

  //? -_ Metodo que abrira el modal
  open(){
    const modalRef = this.modalService.open(ModalComponent, { size: 'md', centered: true, windowClass: 'dark-modal' })
    modalRef.componentInstance.forms = false
    modalRef.componentInstance.title = 'Crear un nuevo entrenador!'
    modalRef.componentInstance.title_button = 'Crear usuario!'
  }  

  //? -_ Metodo que abrira el modal
  openEditModal(id: number){
    const modalRef = this.modalService.open(ModalComponent, { size: 'md', centered: true, windowClass: 'dark-modal' })
    modalRef.componentInstance.forms = false
    modalRef.componentInstance.id_act = id
    modalRef.componentInstance.title = 'Editar un nuevo entrenador!'
    modalRef.componentInstance.title_button = 'Editar usuario!'

  } 

  //? -_ Metodo que cargara todos los usuarios registrados en el sistema
  loadAllUser(){
    this.userService.view_all_user().subscribe(
      ({data}: _users[] | any) => {
        this.users = data        
        this.dataSource = new MatTableDataSource(this.users) 
      }
    )
  }

  //? -_ Metodo que aplicara el filtro en la tabla de las clases
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //? -_ Metodo que eliminara al usuario definitivamente del sistema
  deleteUser(id: number, idx: number) {
    console.log(id);
    
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
        this.userService.delete_user(String(id)).subscribe(
          ({msg}: string | any) => {
            this.users.splice(idx, 1)
            this.dataSource = new MatTableDataSource(this.users) 
            Swal.fire('Exito!', msg, 'success')
          }, err => {
            console.log(err);
            
          }
        )
      }
    })

  }

}
