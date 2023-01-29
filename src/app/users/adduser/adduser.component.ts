import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from 'src/app/model/CanComponentLeave';
// import { CanComponentLeave } from 'src/app/guards/unsaved-changes.guard';
 
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements CanComponentLeave{
userName: FormControl = new FormControl();

canLeave(): boolean{
  if(this.userName.dirty){
    //return window.confirm('You have some unsaved changes. Save it before leaving');
    return window.confirm('You have some unsaved changes, Are you sure you want to navigate?');
  }
  return true;
}

}
