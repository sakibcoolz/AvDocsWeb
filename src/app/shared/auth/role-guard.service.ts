import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { jwtToken } from './jwtRelate';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if(!this.authService.isAuthenticated() || !(jwtToken.rolefinder().filter(data => data.servicename === route.data.expectedRole) !== null ? true : false)) {
      this.router.navigate(['login']);
      return false;
    }
      // if(!this.authService.isAuthenticated() || jwtToken.decode() !== expectedRole) {
      //   console.log('unauthorised');
      //   this.router.navigate(['login']);
      //   return false;
      // }
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
