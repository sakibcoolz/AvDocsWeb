import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightsmanagementRoutingModule } from './rightsmanagement-routing.module';
import { RightsmanagementComponent } from './rightsmanagement.component';
import { AddRightsComponent } from './add-rights/add-rights.component';
import { EditRightsComponent } from './edit-rights/edit-rights.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ViewRightsComponent } from './view-rights/view-rights.component';

@NgModule({
  declarations: [RightsmanagementComponent, AddRightsComponent, EditRightsComponent, ViewRightsComponent],
  imports: [
    CommonModule,
    RightsmanagementRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class RightsmanagementModule { }
