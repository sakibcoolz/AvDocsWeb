import { Component, OnInit } from '@angular/core';
import { clinicright } from 'src/app/shared/model/token.model';
import { jwtToken } from 'src/app/shared/auth/jwtRelate';
import { RightsService } from 'src/app/shared/service/rights.service';

@Component({
  selector: 'app-view-rights',
  templateUrl: './view-rights.component.html',
  styleUrls: ['./view-rights.component.css']
})
export class ViewRightsComponent implements OnInit {

  clinicid: number;
  clinicright : clinicright[];
  constructor(private _rightsService : RightsService) {
    this.clinicid = jwtToken.getClinicId()
  }

  ngOnInit(): void {
    this._rightsService.getrightbyid(this.clinicid).subscribe(data => {
      this.clinicright = data;
    })
  }

}
