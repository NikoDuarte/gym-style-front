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

  public displayedColumns: any[] = ['title', 'descripcion', 'cupos', 'opt'];

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
        console.log(r);
      }
    )
  }

  //* |-> Metodo que abrira el modal
  open(){
    const modalRef = this.modalService.open(ModalComponent, { size: 'md', centered: true, windowClass: 'dark-modal' })
    modalRef.componentInstance.forms = true
    modalRef.componentInstance.title = 'Crear una nueva clase!'
  }

  //* |-> Metodo que categorizara el role para asi cargar la informacion necesaria
  cateRoleUser(){
    switch (this.user.role) {
      case 'DEFAULT-ROLE':
          this.clasesInsService.viewAllClassUser().  subscribe(
            r => {
              console.log(r);
            }
          )
        break;
      case 'ENTRE-ROLE':
          this.clasesService.viewClassEntre(this.user.id).subscribe(
            ({data}: any) => {
              console.log(data);
              
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
              console.log(r);
              
            }
          )
        break;
      default:
        break;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
