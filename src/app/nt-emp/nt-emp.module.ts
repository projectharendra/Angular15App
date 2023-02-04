import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NtEmpComponent } from './nt-emp/nt-emp.component';
import { NtEmpaddComponent } from './nt-empadd/nt-empadd.component';
import { NtEmplistingComponent } from './nt-emplisting/nt-emplisting.component';



@NgModule({
  declarations: [
    NtEmpComponent,
    NtEmpaddComponent,
    NtEmplistingComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule 
  ]
})
export class NtEmpModule { }
