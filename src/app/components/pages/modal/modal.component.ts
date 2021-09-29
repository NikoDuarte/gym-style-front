import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClasesService } from '../../../api/clases.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() public id_act: number = 0

  @Input() public forms: boolean = true //* |-> true: form-clase | false: form-user

  @Input() public title!: string 

  @Input() public title_button!: string 

  constructor(
    //* |-> Servicio para la utilidad del modal
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    
  }

}
