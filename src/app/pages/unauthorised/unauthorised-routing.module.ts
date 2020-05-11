import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthorisedComponent } from './unauthorised.component';

const routes: Routes = [{ path: '', component: UnauthorisedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthorisedRoutingModule { }
