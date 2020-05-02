import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminEmailAddService } from "src/app/shared/service/admin-email-add.service";
import { adminId } from "src/app/shared/model/admintoken.model";

@Component({
  selector: "app-add-email-admin",
  templateUrl: "./add-email-admin.component.html",
  styleUrls: ["./add-email-admin.component.css"],
})
export class AddEmailAdminComponent implements OnInit {
  pname;
  msg: string;
  alerts;
  datas: adminId;
  constructor(
    private _AR: ActivatedRoute,
    private _emailadminservice: AdminEmailAddService,
    private _router: Router
  ) {
    this._AR.params.subscribe((data) => {
      this.pname = data["id"];
    });
    this._emailadminservice.checkid(this.pname).subscribe((data) => {
      this.datas = data;
      if (this.datas.ID == 0) {
        this._router.navigateByUrl("/");
      }
    });
  }

  ngOnInit(): void {}
}
