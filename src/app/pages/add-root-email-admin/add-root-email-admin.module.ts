import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRootEmailAdminRoutingModule } from './add-root-email-admin-routing.module';
import { AddRootEmailAdminComponent } from './add-root-email-admin.component';


@NgModule({
  declarations: [AddRootEmailAdminComponent],
  imports: [
    CommonModule,
    AddRootEmailAdminRoutingModule
  ]
})
export class AddRootEmailAdminModule { }
