import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-nt-emplisting',
  templateUrl: './nt-emplisting.component.html',
  styleUrls: ['./nt-emplisting.component.css']
})
export class NtEmplistingComponent  implements OnInit {
  employeedata$: any;
  contact$: any;
  users: any;
  constructor(private service: EmployeeService) {
    this.LoadAll();
  }

  ngOnInit(): void {
    
  }

  LoadAll() {
    this.service.LoadAllEmployee().subscribe(result => {
      this.employeedata$ = result;
    });
  }
  delete(code: any) {
    if (confirm("Do you want remove?")) {
      this.service.RemoveEmployeebycode(code).subscribe(result => {
        this.LoadAll();
      });
    }
  }
}
