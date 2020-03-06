import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class OrderModule { }
