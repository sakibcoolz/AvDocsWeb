import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { jwtToken } from './jwtRelate';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.expectedRole;
      if(!this.authService.isAuthenticated() || jwtToken.decode() !== expectedRole) {
        console.log('unauthorised');
        this.router.navigate(['login']);
        return false;
      }
      console.log('authorised');
    return true;
  }
}
