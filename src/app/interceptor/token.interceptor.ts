
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, throwError, BehaviorSubject, switchMap, filter, take } from 'rxjs';
//import { LoginService } from './login.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { LoginService } from '../services/login.service';
//import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private inject: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(LoginService);
    let jwtToken = request.clone({
      setHeaders: {
        Authorization: 'bearer ' + authservice.GetToken()
      }
    });
    return next.handle(jwtToken);
  }


  /* intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(LoginService);
    let authreq = request;
    authreq = this.AddTokenheader(request, authservice.GetToken());
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          // need to implement logout
          authservice.Logout();
          // refresh token logic
        //  return this.handleRefrehToken(request, next);
        }
        return throwError(errordata);
      })
    );

  } */

  /*  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
     let authservice = this.inject.get(LoginService);
     return authservice.GenerateRefreshToken().pipe(
       switchMap((data: any) => {
         authservice.SaveTokens(data);
         return next.handle(this.AddTokenheader(request,data.jwtToken))
       }),
       catchError(errodata=>{
         authservice.Logout();
         return throwError(errodata)
       })
     );
   } */

  /* AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) });
  } */


}
