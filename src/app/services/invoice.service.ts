import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {


  constructor(private http: HttpClient) { }

  GetCustomer() {
    return this.http.get('http://localhost:33115/api/Customer/GetAll');
  }
  GetCustomerbycode(code: any) {
    return this.http.get('http://localhost:33115/api/Customer/GetByCode?Code='+code);
  }
  GetProducts() {
    return this.http.get('http://localhost:33115/api/Product/GetAll');
  }
  GetProductbycode(code: any) {
    return this.http.get('http://localhost:33115/api/Product/GetByCode?Code='+code);
  }

  GetAllInvoice(){
    return this.http.get('http://localhost:33115/api/Invoice/GetAllHeader');
  }

  GetInvHeaderbycode(invoiceno:any){
    return this.http.get('http://localhost:33115/api/Invoice/GetAllHeaderbyCode?invoiceno='+invoiceno);
  }
  GetInvDetailbycode(invoiceno:any){
    return this.http.get('http://localhost:33115/api/Invoice/GetAllDetailbyCode?invoiceno='+invoiceno);
  }
  RemoveInvoice(invoiceno:any){
    return this.http.delete('http://localhost:33115/api/Invoice/Remove?invoiceno='+invoiceno);
  }

  SaveInvoice(invoicedata:any){
    return this.http.post('http://localhost:33115/api/Invoice/Save',invoicedata);
  }

  
  
}
