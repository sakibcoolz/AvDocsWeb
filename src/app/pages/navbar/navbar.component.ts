import { Component, OnInit } from '@angular/core';
import { jwtToken } from 'src/app/shared/auth/jwtRelate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role 
  constructor() {
    this.role = jwtToken.decode()
  }
  
  ngOnInit(): void {
    
  }

}
