import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsermasterComponent } from './usermaster/usermaster.component';
import { MaterialModule } from 'src/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsermasterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
