import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserMaster } from 'src/app/model/UserMaster';

import * as alertify from 'alertifyjs'
import { MatDialog } from '@angular/material/dialog';
import { UsermasterService } from 'src/app/services/usermaster.service';
import { ModalpopupComponent } from 'src/app/modalpopup/modalpopup.component';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.css']
})
export class UsermasterComponent implements OnInit {

  constructor(private service: UsermasterService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetAllUser();
  }
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  UserDetail: any;
  dataSource: any;

  GetAllUser() {
    this.service.GetAllUser().subscribe(item => {
      this.UserDetail = item;
   console.log(this.UserDetail);
      this.dataSource = new MatTableDataSource<UserMaster>(this.UserDetail);
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = ['Userid', 'Username', 'Email', 'Isactive', 'Role', 'Action'];

  FunctionUpdate(userid: any) {

    let popup= this.dialog.open(ModalpopupComponent,{
        width:'400px',
        height:'300px',
       exitAnimationDuration:'1000ms',
       enterAnimationDuration:'1000ms',
       data:{
         userid:userid
       }
     })
     popup.afterClosed().subscribe(item=>{
        this.GetAllUser();
     });
 
   }
   FunctionDelete(userid: any) {
     alertify.confirm("Remove User","do you want remove this user?",()=>{
       this.service.RemoveUser(userid).subscribe(item => {
         this.GetAllUser();
         alertify.success("Removed Successfully");
       });
 
     },function(){})
     
   }
}
