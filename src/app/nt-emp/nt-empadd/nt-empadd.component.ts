import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-nt-empadd',
  templateUrl: './nt-empadd.component.html',
  styleUrls: ['./nt-empadd.component.css']
})
export class NtEmpaddComponent  implements OnInit {

  desigantiondata: any;
  saveresp: any;
  messageclass = '';
  message = '';
  EditData: any;
  Employeeid: any;
  constructor(private service: EmployeeService, private route: ActivatedRoute)
   {
      this.Employeeid = this.route.snapshot.paramMap.get('id');
      if (this.Employeeid != null && this.Employeeid != 0) 
      {
        this.UpdateEmployee(this.Employeeid);
      }
      this.LoadDesignation();
  }

  ngOnInit(): void {
  }

  UpdateEmployee(code: any) {
    this.service.Employeebycode(code).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.employeeform = new FormGroup({
          Code: new FormControl(this.EditData.Code),
          Name: new FormControl(this.EditData.Name),
          Email: new FormControl(this.EditData.Email),
          Phone: new FormControl(this.EditData.Phone),
          Designation: new FormControl(this.EditData.Designation),
        });

      }
    });
  }

  employeeform = new FormGroup({
    Code: new FormControl({ value: '', disabled: true }),
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    Phone: new FormControl('', Validators.required),
    Designation: new FormControl('', Validators.required),
  });

  LoadDesignation() {
    this.service.LoadDesignation().subscribe(result => {
      this.desigantiondata = result;
      console.log(this.desigantiondata);
    });

  }
  SaveEmployee() {
    if (this.employeeform.valid) {
       console.log(this.employeeform.value);

      this.service.SaveEmployee(this.employeeform.value).subscribe(result => {
        this.saveresp = result;
        if (this.saveresp.result == 'pass') {
          this.message = "Saved Sucessfully"
          this.messageclass = 'sucess'

        } else {
          this.message = "save failed"
          this.messageclass = 'error'
        }

      });
    } else {
      this.message = "Please enter valid data"
      this.messageclass = 'error'
    }
  }

  get name() {
    return this.employeeform.get('Name');    
  }
  get phone() {
    return this.employeeform.get('Phone');
  }
  get email() {
    return this.employeeform.get('Email');
  }
  get designation() {
    return this.employeeform.get('Designation');
  }
}
