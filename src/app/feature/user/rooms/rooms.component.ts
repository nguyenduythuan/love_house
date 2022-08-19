import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/core/models/room.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: Room[]  = [
    {
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backToHome():void {
    this._location.back();
  }

}
