import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
apiUrl='http://localhost:3000/students'

getAllStudents()
{
  return this.http.get(this.apiUrl);
}
saveStudentData(data:any)
{
 return this.http.post(this.apiUrl,data);
}
deleteStudent(id:any){
   //return this.http.delete(this.apiUrl,id);
 return this.http.delete(`${this.apiUrl}/${id}`);
}

getStudentById(id:number){  
  return this.http.get(`${this.apiUrl}/${id}`);
}
updateStudentData(id:number,data:any){
  return this.http.put(`${this.apiUrl}/${id}`,data);
}
}
