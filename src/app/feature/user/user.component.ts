import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  modalRef!: BsModalRef;
  formPickRoom: FormGroup;
  constructor(
    public modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.formPickRoom = this.fb.group({

    });
  }

  ngOnInit(): void {
  }

  showChat(): void {
    console.log("OK");
  }

  showModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });
  }

  pickRoom() {
    console.log('run');
  }


}
