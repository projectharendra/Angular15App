import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'EmployeeManagement';
  isMenuVisible=true;
  isadmin = false;
  /*
  Error Handling
  https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
   */
  constructor(private http: HttpClient, private route: Router,private service:LoginService) {}
  

  ngOnInit(): void { }   
  ngDoCheck(): void {    
    const currentRoute = this.route.url;
    //console.log(currentRoute);
    if(currentRoute == '/login' || currentRoute == '/access/register'){
      this.isMenuVisible=false;
    }
    else{
      this.isMenuVisible=true;
    }
console.log(this.service.GetRole());
    if (this.service.GetRole() == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }

  }


  /* throwError(){
    throw new Error('My Pretty Error');
  }

  throwHttpError(){
     try{ 
     this.http.get('https://jsonplaceholder.typicode.com/usersss').subscribe();
     }
     catch(error){throw error;
     }
  } */


}