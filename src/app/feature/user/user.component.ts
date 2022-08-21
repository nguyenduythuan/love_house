import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as dayjs from 'dayjs';

import { Room } from '../../core/models/room.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  modalRef!: BsModalRef;
  formPickRoom: FormGroup;
  dateNow: string = dayjs().format("HH:mm DD/MM/YYYY");

  constructor(
    public modalService: BsModalService,
    private fb: FormBuilder,
    private ElByClassName: ElementRef
  ) {
    this.formPickRoom = this.fb.group({
      fullName: ['', [Validators.required]],
      timeCheckIn: ['', [Validators.required]],
      timeCheckOut: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  showChat(): void {
    console.log("OK");
  }

  showModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered animation-show' });
  }

  onChooseRoom() {
    this.modalRef.hide();
    window.location.href = '/list-room';
  }

  hideModal(): void {
    this.modalRef.setClass('modal-dialog modal-dialog-centered animation-disappear');
    this.modalRef.hide();
  }

  onForCus(): void {
  }

}
