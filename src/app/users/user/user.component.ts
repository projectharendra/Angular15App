import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userDetails:any;
  constructor(private route:ActivatedRoute, private userService:UsersService){}
  ngOnInit(): void {
    // console.log(this.route.snapshot);
    // console.log(this.route.snapshot.params['ID']);
     let id = this.route.snapshot.params['ID'];
    this.userService.getUserDetailById(id).subscribe(user =>{
      this.userDetails = user;
      //  console.log(user);      
     })
  }

}
