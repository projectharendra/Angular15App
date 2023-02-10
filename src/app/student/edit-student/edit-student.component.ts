import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private service: StudentService,private route:ActivatedRoute) { }

  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
message:boolean=false
  ngOnInit(): void {
    //Get id value from url coming from list page
    //console.warn(this.route.snapshot.params.id);
    var studentId = this.route.snapshot.params.id;
this.getStudentById(studentId);

  }

  getStudentById(id:number){
    this.service.getStudentById(id).subscribe((data:any)=>{
      //console.warn(data);
      this.editStudent = new FormGroup({
        name: new FormControl(data['name']),
        email: new FormControl(data['email'])
      });
      
    });
  }

  updateData() {

    this.service.updateStudentData(this.route.snapshot.params.id,this.editStudent.value).subscribe((data)=>{
      this.message=true;
      this.editStudent.reset({});
    });
    
  }
}