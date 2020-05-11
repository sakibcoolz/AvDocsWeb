import { rights } from './../model/token.model';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { jwtToken } from './jwtRelate';
import { isUndefined } from 'util';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    var expectedRole = route.data.expectedRole;
    var s:rights[] = jwtToken.rolefinder().filter(data => data.servicename === expectedRole)
    console.log(s[0])
    var d : boolean = true
    if (s[0] === undefined) {
      console.log('is null')
       d = false
    }
    if(!this.authService.isAuthenticated() || !d) {
      console.log('unauthorised');
      this.router.navigate(['unauthorised']);
      return false;
    }
      // if(!this.authService.isAuthenticated() || jwtToken.decode() !== expectedRole) {
      //   console.log('unauthorised');
      //   this.router.navigate(['login']);
      //   return false;
      // }
      console.log('authorised');
    return true;
  }

  // canActivate(route: ActivatedRouteSnapshot) {
  //   const expectedRole = route.data.expectedRole;
  //     if(!this.authService.isAuthenticated() || expectedRole) {
  //       console.log('unauthorised');
  //       this.router.navigate(['login']);
  //       return false;
  //     }
  //     console.log('authorised');
  //   return true;
  // }

}
