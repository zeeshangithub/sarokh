import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShipperRoutingModule } from './shipper-routing.module';
import { ShippersComponent } from './shippers/shippers.component';


@NgModule({
  declarations: [ShippersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShipperRoutingModule,
    ArchwizardModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule
  ]
})
export class ShipperModule { }
