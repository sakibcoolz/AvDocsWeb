import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpdTodayAppointmentRoutingModule } from './opd-today-appointment-routing.module';
import { OpdTodayAppointmentComponent } from './opd-today-appointment.component';


@NgModule({
  declarations: [OpdTodayAppointmentComponent],
  imports: [
    CommonModule,
    OpdTodayAppointmentRoutingModule
  ]
})
export class OpdTodayAppointmentModule { }
