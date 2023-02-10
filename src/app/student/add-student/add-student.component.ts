import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: StudentService) { }

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
message:boolean=false
  ngOnInit(): void {
  }
  saveData() {
    this.service.saveStudentData(this.addStudent.value).subscribe((data)=>{
      this.message=true;
      this.addStudent.reset({});
    });
  }

}