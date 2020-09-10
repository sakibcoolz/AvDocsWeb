import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  queryForms: FormGroup;
  submitted: boolean = false;
  msg;
  datas :any;
  constructor(
    private _user :UserService,
    private _fb: FormBuilder,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this._user.getHtml().subscribe(data =>{
      this.datas=data
      console.log(this.datas)
    })
    this.queryForms=this._fb.group({
      query: ['',  Validators.required]
    })
  }

  onSubmit(s :any) {
    console.log(s)
  }
}
