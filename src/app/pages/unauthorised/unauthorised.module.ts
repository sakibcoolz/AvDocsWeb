import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthorisedRoutingModule } from './unauthorised-routing.module';
import { UnauthorisedComponent } from './unauthorised.component';


@NgModule({
  declarations: [UnauthorisedComponent],
  imports: [
    CommonModule,
    UnauthorisedRoutingModule
  ]
})
export class UnauthorisedModule { }
