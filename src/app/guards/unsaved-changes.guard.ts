import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentLeave } from '../model/CanComponentLeave';
// import { AdduserComponent } from '../users/adduser/adduser.component';

/* export interface CanComponentLeave{
 canLeave: () =>boolean;
} */

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave) {
    // component.canLeave means in userName field any value changes made.
    if(component.canLeave){
     return component.canLeave();
    }
    return true;
  }

/* export class UnsavedChangesGuard implements CanDeactivate<AdduserComponent> {
  canDeactivate(component: AdduserComponent) {
    // component.userName.dirty means in userName field any value changes made.
    if(component.userName.dirty){
      return window.confirm('You have some unsaved changes, Are you sure you want to navigate?');
    }
    return true;
  } */
  
}
