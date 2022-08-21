import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { PaymentComponent } from './payment/payment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgImageSliderModule } from 'ng-image-slider';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';


export const routes: Routes = [
  {
    path: '',
    data: { title: 'Trang chủ' },
    component: UserComponent
  },
  {
    path: 'list-room',
    data: { title: 'Danh sách phòng' },
    component: RoomsComponent
  },
  {
    path: 'room/:id',
    data: { title: 'Chi tiết phòng' },
    component: RoomComponent
  },
  {
    path: 'room/:id/payment',
    data: { title: 'Thanh toán' },
    component: PaymentComponent
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    UserComponent,
    RoomsComponent,
    RoomComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgImageSliderModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class UserModule { }
