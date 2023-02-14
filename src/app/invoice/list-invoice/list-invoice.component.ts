import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { InvoiceService } from 'src/app/services/invoice.service';


@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit{
  
  Invoiceheader: any;
  invoiceno: any;

  constructor(private service: InvoiceService, private alert: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.LoadInvoice();
  }
  LoadInvoice() {
    this.service.GetAllInvoice().subscribe(res => {
      this.Invoiceheader = res;      
    });
  }
  invoiceremove(invoiceno: any) {
    if (confirm('Do you want to remove this Invoice :' + invoiceno)) {
      this.service.RemoveInvoice(invoiceno).subscribe(res => {
        let result: any;
        result = res;
        if (result.result == 'pass') {
          this.alert.success('Removed Successfully.', 'Remove Invoice')
          this.LoadInvoice();
        } else {
          this.alert.error('Failed to Remove.', 'Invoice');
        }
      });
    }
  }

  Editinvoice(invoiceno: any) {
    this.router.navigateByUrl('/editinvoice/' + invoiceno);
  }


}
