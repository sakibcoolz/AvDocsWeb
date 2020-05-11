import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightsmanagementRoutingModule } from './rightsmanagement-routing.module';
import { RightsmanagementComponent } from './rightsmanagement.component';
import { AddRightsComponent } from './add-rights/add-rights.component';
import { EditRightsComponent } from './edit-rights/edit-rights.component';


@NgModule({
  declarations: [RightsmanagementComponent, AddRightsComponent, EditRightsComponent],
  imports: [
    CommonModule,
    RightsmanagementRoutingModule
  ]
})
export class RightsmanagementModule { }
