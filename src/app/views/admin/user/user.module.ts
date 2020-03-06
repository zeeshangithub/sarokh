import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [UsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxDatatableModule]
})
export class UserModule { }
