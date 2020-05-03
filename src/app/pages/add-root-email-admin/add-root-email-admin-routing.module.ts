import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRootEmailAdminComponent } from './add-root-email-admin.component';

const routes: Routes = [{ path: '', component: AddRootEmailAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRootEmailAdminRoutingModule { }
