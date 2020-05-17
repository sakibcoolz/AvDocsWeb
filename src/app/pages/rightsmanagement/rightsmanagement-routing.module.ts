import { EditRightsComponent } from './edit-rights/edit-rights.component';
import { AuthGuard } from './../../shared/auth/auth-guard.service';
import { AddRightsComponent } from './add-rights/add-rights.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightsmanagementComponent } from './rightsmanagement.component';
import { RoleGuard } from 'src/app/shared/auth/role-guard.service';
import { ViewRightsComponent } from './view-rights/view-rights.component';

const routes: Routes = [
  {
    path: '', component: RightsmanagementComponent, children:[
      {
        path: '',
        component: ViewRightsComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole : {servicename: 'rights', view : true}
        }
      },
      {
        path:'addright',
        component: AddRightsComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole : {servicename: 'rights', add : true}
        }
      },
      {
        path:'editright',
        component: EditRightsComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole : {servicename: 'rights', edit: true}
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightsmanagementRoutingModule { }
