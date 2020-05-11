import { rights } from './../model/token.model';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { jwtToken } from './jwtRelate';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    var expectedRole = route.data.expectedRole;
    var s:rights[] = jwtToken.rolefinder().filter(data => data.servicename === expectedRole.servicename)


    var d : boolean = true
    if (s[0] === undefined && this.authService.isAuthenticated()) {
        console.log('unauthorised');
        this.router.navigate(['unauthorised']);
        return false;
    } else if (s[0].servicename === expectedRole.servicename) {

      if(s[0].add === expectedRole.add) {
        console.log('add rights')
        return true
      }

      if(s[0].view === expectedRole.view) {
        console.log('edit rights')
        return true
      }

      if(s[0].edit === expectedRole.edit) {
        console.log('edit rights')
        return true
      }

      if(s[0].delete === expectedRole.delete) {
        console.log('delete rights')
        return true
      }

      this.router.navigate(['unauthorised']);
      return false;

    }





    // if (expectedRole.add === s[0].add || expectedRole.edit === s[0].edit || expectedRole.view === s[0].view || expectedRole.delete === s[0].delete) {


    //   // if(!this.authService.isAuthenticated() || !d ) {
    //   //   console.log('unauthorised');
    //   //   this.router.navigate(['unauthorised']);
    //   //   return false;
    //   // }
    //   console.log('authorised');
    //   return true;

    // }

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
