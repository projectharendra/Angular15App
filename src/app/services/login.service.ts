import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Buffer } from 'buffer'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiurl ="http://localhost:33115/api/Login/";

  constructor(private http: HttpClient, private router: Router) { }

  tokenresp: any;
  /* private _updatemenu = new Subject<void>();
  get updatemenu() {
    return this._updatemenu;
  } */

  Proceddlogin(usercred: any) {
      return this.http.post(this.apiurl + 'authenticate', usercred);
  }

  GenerateRefreshToken() {
    let input = {
      "jwtToken": this.GetToken(),
      "refreshToken": this.GetRefreshToken()
    }
    return this.http.post(this.apiurl + 'refresh', input);
  }

  IsLogged() {
    return localStorage.getItem("token") != null;
  }
  GetToken() {
    return localStorage.getItem('token')!=null?localStorage.getItem('token'):'';
    //return localStorage.getItem("token") || '';
  }

  Registeration(inputdata: any) {
    return this.http.post('http://localhost:33115/api/Login/Register', inputdata);
  }

  GetRole() {
    var token = localStorage.getItem('token');
    //console.log("token: " +JSON.parse(Buffer.from(token).toString()));

    if (token != null) {     
      var extractdata = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
     // console.log("extractdata role: " +extractdata.role);
      return extractdata.role;
    }else{
      return '';
    }

  }


  GetRefreshToken() {
    return localStorage.getItem("refreshtoken") || '';
  }

  SaveTokens(tokendata: any) {
    localStorage.setItem('token', tokendata.jwtToken);
    localStorage.setItem('refreshtoken', tokendata.refreshToken);
  }

  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  GetRolebyToken(token: any) {
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token))
    return this.tokenresp.role;
  }

/*   GetMenubyrole(role: any) {
    return this.http.get(this.apiurl + 'GetMenubyRole/' + role)
  } */

  HaveAccess(role: any, menu: any) {
    return this.http.get(this.apiurl + 'HaveAccess?role=' + role + '&menu=' + menu);
  }





}
