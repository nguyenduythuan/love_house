import { ImageRoom } from "./image-room.model";

export class Room  {
  id!: Number;
  name_room!: string;
  title!: string;
  description!: string;
  status!: Number;
  type!: Number;
  created_at!: Date;
  update_at!: Date;
  price!: Number;
  images!: ImageRoom[];
}