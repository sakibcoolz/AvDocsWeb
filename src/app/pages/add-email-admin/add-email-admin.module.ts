import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmailAdminRoutingModule } from './add-email-admin-routing.module';
import { AddEmailAdminComponent } from './add-email-admin.component';


@NgModule({
  declarations: [AddEmailAdminComponent],
  imports: [
    CommonModule,
    AddEmailAdminRoutingModule
  ]
})
export class AddEmailAdminModule { }
