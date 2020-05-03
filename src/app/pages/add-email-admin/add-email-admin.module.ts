import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmailAdminRoutingModule } from './add-email-admin-routing.module';
import { AddEmailAdminComponent } from './add-email-admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [AddEmailAdminComponent],
  imports: [
    CommonModule,
    AddEmailAdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatOptionModule,
    MatGridListModule
  ]
})
export class AddEmailAdminModule { }
