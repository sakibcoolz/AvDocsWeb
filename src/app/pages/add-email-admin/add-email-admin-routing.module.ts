import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmailAdminComponent } from './add-email-admin.component';

const routes: Routes = [{ path: '', component: AddEmailAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmailAdminRoutingModule { }
