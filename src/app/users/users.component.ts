
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
/*
Resolve Guard implementation on Users Page 
--------------------
1. Create a any guard and make customized changes for Resolve Guard
2. make changes on resolve.gurd.ts
	a. inject UserServices
	b. create a method to return all users
3. in app.module.ts, in provider section register resolve guard
4. Apply Resolve guard to app-routing.module.ts
	  {path:'users',component:UsersComponent,
 	   resolve:{data: ResolveGuard,}
	  },

5. Make cahnges on target page - Users.ts
	a. Inject ActivedRout in constructor
	b. make chages on getAllUsers()
  		userList:any=[];	
		this.userList = this.activateRoute.snapshot.data['data'];
*/

 // users:any[];
  userList:any=[];
  constructor(private service:UsersService, private activateRoute: ActivatedRoute){}
 
  ngOnInit(): void {
    //this.users = this.userService.getAllUsers();

   /*  this.service.getAllUsers().subscribe(data=>{
      this.userList=data;      
    }); */

    // Implemented Resolve Route - Users page will be visible once data loaded successfully due to Resolve Route.
    this.userList = this.activateRoute.snapshot.data['data'];
  }
}
