import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material-module';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
