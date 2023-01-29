import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  constructor(private service:SharedService){}
  

//rowData1!: Observable<any[]>;
rowData: any[];

  colDefs: ColDef[] = 
  [
    { headerName: 'Make',
      field: 'make'    
      //cellRenderer: 'agGroupCellRenderer'
    },
    { headerName: 'Model',
     field: 'model'
    },
    { headerName: 'Price',
     field: 'price'
    }
]; 
DefaultColDef: ColDef ={
  sortable: true,  filter: true
}

ngOnInit(): void {
   this.refreshAgGridData();    
}
refreshAgGridData(){
  this.service.getAllDataForAgGrid().subscribe(data=>{
    this.rowData=data;
  });


/*   rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000
    },
    { make: 'Ford', model: 'Mondeo', price: 32000
    },
    { make: 'Porsche', model: 'Boxster', price: 72000
    }
];
 */

}
}
