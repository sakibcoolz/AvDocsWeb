import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RightsmanagementRoutingModule } from './rightsmanagement-routing.module';
import { RightsmanagementComponent } from './rightsmanagement.component';
import { AddRightsComponent } from './add-rights/add-rights.component';
import { EditRightsComponent } from './edit-rights/edit-rights.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ViewRightsComponent } from './view-rights/view-rights.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';


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
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule
  ]
})
export class RightsmanagementModule { }
