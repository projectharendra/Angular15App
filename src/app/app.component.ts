import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EmployeeManagement';
  /*
  Error Handling
  https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
   */
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void { }   


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