import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightsmanagementRoutingModule } from './rightsmanagement-routing.module';
import { RightsmanagementComponent } from './rightsmanagement.component';


@NgModule({
  declarations: [RightsmanagementComponent],
  imports: [
    CommonModule,
    RightsmanagementRoutingModule
  ]
})
export class RightsmanagementModule { }
