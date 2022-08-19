import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms/rooms.component';

export const routes: Routes = [
  {
    path: '',
    data: { title: 'Trang Chủ' },
    component: UserComponent
  },
  {
    path: 'list-room',
    data: { title: 'Danh Sách Phòng' },
    component: RoomsComponent
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    UserComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UserModule { }
