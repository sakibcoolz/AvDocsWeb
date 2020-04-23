import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpdHistoryAppointmentComponent } from './opd-history-appointment.component';

const routes: Routes = [{ path: '', component: OpdHistoryAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpdHistoryAppointmentRoutingModule { }
