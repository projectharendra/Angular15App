import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{

  constructor(private service:StudentService){}
listStudent:any=[]
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.getAllStudents().subscribe(data=>{
      // console.log(data);
      this.listStudent = data;
    });
  }
  deleteStudent(id:any){
    if(confirm('Are you sure??')){
    this.service.deleteStudent(id).subscribe((data:any)=>{
      alert("Record Deleted Successfully.");
      //this.getAllStudents();
      this.ngOnInit();
    });
  };
  
  }

}
