import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HooksComponent } from './hooks/hooks.component';
import { HookChildComponent } from './hook-child/hook-child.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HooksComponent,
    HookChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule 
  ]
})
export class HooksModule { }
