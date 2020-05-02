import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicManagementRoutingModule } from './clinic-management-routing.module';
import { ClinicManagementComponent } from './clinic-management.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [ClinicManagementComponent],
  imports: [
    CommonModule,
    ClinicManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class ClinicManagementModule { }
