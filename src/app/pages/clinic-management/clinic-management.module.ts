import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicManagementRoutingModule } from './clinic-management-routing.module';
import { ClinicManagementComponent } from './clinic-management.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [ClinicManagementComponent],
  imports: [
    CommonModule,
    ClinicManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule
  ]
})
export class ClinicManagementModule { }
