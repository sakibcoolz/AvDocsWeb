import { rights } from './../../shared/model/token.model';
import { Component, OnInit } from '@angular/core';
import { jwtToken } from 'src/app/shared/auth/jwtRelate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role
  rights: Array<rights>;
  constructor() {
    this.role = jwtToken.decode()
    this.rights = jwtToken.rolefinder()
  }

  ngOnInit(): void {

  }

  checksrights(rights: string): boolean{
    return this.rights.filter(data => data.servicename === rights)[0] === undefined ? false : true;
  }

}
