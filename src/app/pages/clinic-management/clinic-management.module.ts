import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicManagementRoutingModule } from './clinic-management-routing.module';
import { ClinicManagementComponent } from './clinic-management.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [ClinicManagementComponent],
  imports: [
    CommonModule,
    ClinicManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ClinicManagementModule { }
