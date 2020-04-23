import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpdNewAppointmentRoutingModule } from './opd-new-appointment-routing.module';
import { OpdNewAppointmentComponent } from './opd-new-appointment.component';


@NgModule({
  declarations: [OpdNewAppointmentComponent],
  imports: [
    CommonModule,
    OpdNewAppointmentRoutingModule
  ]
})
export class OpdNewAppointmentModule { }
