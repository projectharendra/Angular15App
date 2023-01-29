import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /* IsUserLoggedIn Used in auth gurd page. 
  Since get is mention before the method so it is called as simple property.
  Note: Child component(address and company) of user page accessable ony if IsUserLoggedIn and AdminRole is true.
*/
  get isUserLoggedIn(){
    return true;
  }
  get isAdminRole(){
    return true;
  }
}
