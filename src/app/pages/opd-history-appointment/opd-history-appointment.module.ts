import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpdHistoryAppointmentRoutingModule } from './opd-history-appointment-routing.module';
import { OpdHistoryAppointmentComponent } from './opd-history-appointment.component';


@NgModule({
  declarations: [OpdHistoryAppointmentComponent],
  imports: [
    CommonModule,
    OpdHistoryAppointmentRoutingModule
  ]
})
export class OpdHistoryAppointmentModule { }
