import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightsmanagementComponent } from './rightsmanagement.component';

const routes: Routes = [{ path: '', component: RightsmanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightsmanagementRoutingModule { }
