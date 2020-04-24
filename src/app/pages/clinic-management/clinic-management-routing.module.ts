import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicManagementComponent } from './clinic-management.component';

const routes: Routes = [{ path: '', component: ClinicManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicManagementRoutingModule { }
