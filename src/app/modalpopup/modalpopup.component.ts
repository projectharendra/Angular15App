import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsermasterService } from 'src/app/services/usermaster.service';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {

  constructor(private service: UsermasterService, @Inject(MAT_DIALOG_DATA) public data: any,
  private ref:MatDialogRef<ModalpopupComponent>) { }

  ngOnInit(): void {
    this.GetAllRole();
    this.GetExistdata(this.data.userid);
  }

  roledata: any;
  editdata: any;
  savedata: any;

  updateform = new FormGroup({
    Userid: new FormControl({ value: "", disabled: true }),
    Role: new FormControl("", Validators.required),
    Isactive: new FormControl(true)
  })

  SaveUser() {
    if (this.updateform.valid) {
      this.service.UpdateUser(this.updateform.getRawValue()).subscribe(item => {
        this.savedata = item;
        if (this.savedata.result == 'pass') {
          alertify.success("Updated successfully.")
          this.ref.close();
        } else {
          alertify.error("Failed try again");
        }
      });
    }
  }

  GetAllRole() {
    this.service.GetAllRoles().subscribe(item => {
      this.roledata = item;
    });
  }

  GetExistdata(userid: any) {
    this.service.GetUserbyId(userid).subscribe(item => {
      this.editdata = item;
      if (this.editdata != null) {
        this.updateform.setValue({ 
          Userid: this.editdata.Userid,
          Role: this.editdata.Role,
          Isactive: this.editdata.Isactive
         });
      }
    });

  }

}
