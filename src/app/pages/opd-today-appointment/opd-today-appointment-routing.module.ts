import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpdTodayAppointmentComponent } from './opd-today-appointment.component';

const routes: Routes = [{ path: '', component: OpdTodayAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpdTodayAppointmentRoutingModule { }
