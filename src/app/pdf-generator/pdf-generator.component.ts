import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import  {jsPDF} from 'jspdf';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit{ 
//Export to pdf
//https://www.youtube.com/watch?v=hz_u1qv6P64

//Export to excel
//https://jsonworld.com/demo/how-to-export-data-to-excel-file-in-angular-application

@ViewChild('content',{static:false}) el!:ElementRef;
fileName= 'ExcelSheet.xlsx';

  constructor(){}
  ngOnInit(): void {
    
  }

makePdfFileFromDiv()
{
  let pdf = new jsPDF('p','pt','a4');
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save("demo.pdf");
    }
  }) 
} 

exportexcel(){
/* pass here the table id */
//let element = document.getElementById('excel-table');
let element = document.getElementById('content');

const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

/* generate workbook and add the worksheet */
const wb: XLSX.WorkBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

/* save to file */  
XLSX.writeFile(wb, this.fileName);
}

}
