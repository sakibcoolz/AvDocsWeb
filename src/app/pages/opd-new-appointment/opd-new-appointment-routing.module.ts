import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpdNewAppointmentComponent } from './opd-new-appointment.component';

const routes: Routes = [{ path: '', component: OpdNewAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpdNewAppointmentRoutingModule { }
