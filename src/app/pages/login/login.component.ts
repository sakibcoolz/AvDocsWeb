import { Client } from './../../shared/model/client.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';
import { jwtToken } from 'src/app/shared/auth/jwtRelate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForms: FormGroup;
  submitted: boolean = false;
  datas;
  msg;
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    localStorage.removeItem('currentUser');
    this.loginForms=this._fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(s: Client) {
    console.log(s)
    this._auth.signinUser(s).subscribe(data => {
      this.datas = data;
      jwtToken.decode()
      this._router.navigateByUrl('/dashboard');
    },
    (err) => {
      this.msg = 'Invalid Username and Password';
    });
  }

}
