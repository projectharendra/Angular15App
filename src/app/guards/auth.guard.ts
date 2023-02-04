import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //Injecting the service
  constructor(private service: LoginService, private route: Router) { }

  canActivate() {
    //Business Logic
    if (this.service.IsLogged()) {
      return true;
    } else {
      alert("Please login and access it.");
      this.route.navigate(['login']);
      return false;
    }
  }


   /*  if (this.authService.isUserLoggedIn) {
      return true;
    } else {
      window.alert('Permission denied for this page.');
      return false;
    }
  } */
}

/*   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } 
  
}*/
