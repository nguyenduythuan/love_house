import { Component, Input, OnInit } from '@angular/core';
import { ImageRoom } from 'src/app/core/models/image-room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  imageObject: Array<object> = [];
  @Input() images!: ImageRoom[];
  constructor() { }

  ngOnInit(): void {
    this.images.forEach(item => {
      this.imageObject.push({
        image: item.url,
        title: item.name_image,
        thumbImage: item.url,
      });
    });
  }

}
