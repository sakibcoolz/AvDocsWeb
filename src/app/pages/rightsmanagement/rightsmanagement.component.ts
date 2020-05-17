import { AddRightsComponent } from './add-rights/add-rights.component';

import { Component, OnInit } from '@angular/core';
import { rights, clinicright } from 'src/app/shared/model/token.model';
import { jwtToken } from 'src/app/shared/auth/jwtRelate';
import { RightsService } from 'src/app/shared/service/rights.service';

@Component({
  selector: 'app-rightsmanagement',
  templateUrl: './rightsmanagement.component.html',
  styleUrls: ['./rightsmanagement.component.css']
})
export class RightsmanagementComponent implements OnInit {


  add: boolean;
  edit: boolean;
  delete: boolean;
  view: boolean;

  constructor() {
    this.add = jwtToken.addright('rights', true);
    this.edit = jwtToken.editright('rights', true);
    this.delete = jwtToken.deleteright('rights', true);
  }

  ngOnInit(): void {

  }



}
