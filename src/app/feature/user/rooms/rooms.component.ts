import { Component, OnInit, TemplateRef } from '@angular/core';
import { Room } from 'src/app/core/models/room.model';
import { Location } from '@angular/common';
import { ImageRoom } from 'src/app/core/models/image-room.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: Room[]  = [
    {
      id: 1,
      name_room: 'Phong phong cach ham quoc',
      title: 'one love',
      description: 'Phong view hong ra song han voi phong cach chau au co dien',
      status: 0,
      type: 1,
      created_at: new Date,
      update_at: new Date,
      price: 200,
      images: [
        {
          id: 1,
          name_image: '1',
          url: 'assets/images/1646191551.jpg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        },
        {
          id: 1,
          name_image: '1',
          url: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        },
        {
          id: 1,
          name_image: '1',
          url: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        },
        {
          id: 1,
          name_image: '1',
          url: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        }
      ]
    },
    {
      id: 2,
      name_room: 'room1',
      title: 'one love',
      description: 'anh da lam gi sai',
      status: 0,
      type: 1,
      created_at: new Date,
      update_at: new Date,
      price: 200,
      images: [
        {
          id: 1,
          name_image: '1',
          url: 'assets/images/download.jpeg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        }
      ]
    },
    {
      id: 3,
      name_room: 'room1',
      title: 'one love',
      description: 'anh da lam gi sai',
      status: 0,
      type: 1,
      created_at: new Date,
      update_at: new Date,
      price: 200,
      images: [
        {
          id: 1,
          name_image: '1',
          url: 'assets/images/download.jpeg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        }
      ]
    },
    {
      id: 4,
      name_room: 'room1',
      title: 'one love',
      description: 'anh da lam gi sai',
      status: 0,
      type: 1,
      created_at: new Date,
      update_at: new Date,
      price: 200,
      images: [
        {
          id: 1,
          name_image: '1',
          url: 'assets/images/1646191551.jpg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        }
      ]
    },
    {
      id: 5,
      name_room: 'room1',
      title: 'one love',
      description: 'anh da lam gi sai',
      status: 0,
      type: 1,
      created_at: new Date,
      update_at: new Date,
      price: 200,
      images: [
        {
          id: 1,
          name_image: '1',
          url: 'assets/images/1646191551.jpg',
          base_image: 'dcm',
          room_id: 1,
          status: 0,
          created_at: new Date,
          update_at: new Date,
        }
      ]
    }
  ];

  imagesObject: ImageRoom[] = [];
  modalRef!: BsModalRef;
  pickRoom!: Number;

  constructor(private _location: Location, public modalService: BsModalService,) { }

  ngOnInit(): void {
  }

  backToHome():void {
    this._location.back();
  }

  viewImageRoom(images: ImageRoom[], template: TemplateRef<any>): void {
    console.log(images);
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-center' });
    this.imagesObject = images;
  }

  chooseRoom(id: Number, template: TemplateRef<any>):void {
    console.log(id);
    this.pickRoom = id;
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-pick-room' });
  }

}
