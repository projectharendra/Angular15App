import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //FAKE JSON DATA
  //https://jsonplaceholder.typicode.com/

  readonly apiurl = 'http://localhost:33115/api';
  constructor(private http: HttpClient) { }

 /*  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }
 */
  getAllUsers():Observable<User>{
    
      return this.http.get<User>(this.apiurl +'/User/GetAllUsers'); 
    
   
   } 

   getUserDetailById(id: number){
    return this.http.get<User>(this.apiurl +'/User/GetUserDetailsById/'+ id);
    //return this.http.get<User>(this.apiurl +'/User/'+ id);
    //return this.http.get<User>(this.apiurl +'/User/3' ); 
   } 

   
  
/*  getAllUsers():Observable<any[]>{
  return this.http.get<any>(this.apiurl +'/User'); 
 }  */



 /* getAllUsers()
 {
   return[
    {Id:1,Name:'john',Email:'john@gmail.com'},
    {Id:2,Name:'peter',Email:'peter@gmail.com'},
    {Id:3,Name:'omed',Email:'omed@gmail.com'},
    {Id:4,Name:'kunal',Email:'kunal@gmail.com'}
  ];
}
  */
 /*  getAllUsers()
  {
  return[
    {id:101,name:'john',city:'DELHI',salary:20000,dob: new Date("05/10/1989")},
    {id:102,name:'peter',city:'PUNE',salary:80000,dob: new Date("05/12/1985")},
    {id:103,name:'omed',city:'GOA',salary:190000,dob: new Date("10/10/1991")},
    {id:104,name:'kunal',city:'DELHI',salary:550000,dob: new Date("12/18/1987")}
  ]; 
} */
}
