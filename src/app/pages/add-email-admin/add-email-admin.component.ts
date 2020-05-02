import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-email-admin',
  templateUrl: './add-email-admin.component.html',
  styleUrls: ['./add-email-admin.component.css']
})
export class AddEmailAdminComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  constructor(private _AR: ActivatedRoute) { }

  ngOnInit(): void {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
  }

}
