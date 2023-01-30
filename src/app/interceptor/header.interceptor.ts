import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}
//Modifying HttpRequest header by adding API_KEY
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  console.log(request);
  const API_KEY="test123";
  const req=request.clone({
    setHeaders:{API_KEY,}
  })
    return next.handle(req);
  }
}
