import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as dayjs from 'dayjs'

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
      dateCheckIn: ['', [Validators.required]],
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

  pickRoom() {
    console.log('run');
  }

  nexStept() {

  }

  hideModal(): void {
    const div = document.getElementsByClassName("modal-dialog-centered") as HTMLCollectionOf<HTMLElement>;
    div[0].className = "modal-dialog modal-dialog-centered animation-disappear";
    //this.modalRef.hide();
  }


}
