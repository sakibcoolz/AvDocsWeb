import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { adminId } from 'src/app/shared/model/admintoken.model';

@Component({
  selector: 'app-add-root-email-admin',
  templateUrl: './add-root-email-admin.component.html',
  styleUrls: ['./add-root-email-admin.component.css']
})
export class AddRootEmailAdminComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  datas: adminId;
  constructor(
    private _AR: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this._AR.params.subscribe((data) => {this.pname = data["id"]});
  }

}




