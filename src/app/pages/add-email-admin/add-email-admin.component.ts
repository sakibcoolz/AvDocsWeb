import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminEmailAddService } from "src/app/shared/service/admin-email-add.service";
import { adminId } from "src/app/shared/model/admintoken.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddAdmin } from 'src/app/shared/model/add-admin.model';

@Component({
  selector: "app-add-email-admin",
  templateUrl: "./add-email-admin.component.html",
  styleUrls: ["./add-email-admin.component.css"],
})
export class AddEmailAdminComponent implements OnInit {
  pname;
  msg: string;
  alerts;
  submitted: boolean = false;
  datas: adminId;
  formsgroup: FormGroup;
  constructor(
    private _AR: ActivatedRoute,
    private _emailadminservice: AdminEmailAddService,
    private _router: Router,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this._AR.params.subscribe((data) => {
      this.pname = data["id"];
    });
    this._emailadminservice.checkid(this.pname).subscribe((data) => {
      this.datas = data;
      if (this.datas.ID == 0) {
        this._router.navigateByUrl("/");
      }
    });
    this.formsgroup=this._fb.group({
      firstname : ["", [Validators.required, Validators.maxLength(20)]],
      lastname: ["", [Validators.required, Validators.maxLength(20)]],
      dob: ["", Validators.required],
      homeaddress1: ["", [Validators.required, Validators.maxLength(30)]],
      homeaddress2: ["", [Validators.required, Validators.maxLength(30)]],
      homeaddress3: ["", [Validators.required, Validators.maxLength(30)]],
      pincode : ["", [Validators.required, Validators.maxLength(6)]],
      cityname: ["", [Validators.required, Validators.maxLength(15)]],
      university: ["", [Validators.required, Validators.maxLength(50)]],
      degreename: ["", [Validators.required, Validators.maxLength(20)]],
      passoutyear: ["", Validators.required],
      policyaccept: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      repassword: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      emailid: ["", Validators.required],
      contactno: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      reffcontno: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      uniqueid: [this.pname]
    })
  }

  onSubmit(v: AddAdmin) {
    console.log(v)
  }


}
