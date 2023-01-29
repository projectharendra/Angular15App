import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //Injecting the service
  constructor(private authService: AuthService) { }

  canActivate() {
    //Business Logic
    if (this.authService.isUserLoggedIn) {
      return true;
    } else {
      window.alert('Permission denied for this page.');
      return false;
    }
  }
}

/*   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } 
  
}*/
