import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material-module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ListInvoiceComponent,
    CreateInvoiceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,MaterialModule,ToastrModule
  ]
})
export class InvoiceModule { }
