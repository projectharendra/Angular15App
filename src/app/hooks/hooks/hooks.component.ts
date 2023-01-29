import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductDashboardComponent } from 'src/app/product-dashboard/product-dashboard/product-dashboard.component';
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {
  data:string;
  name:string;
  price:number;

  product: Product = new Product(); //For Class

  constructor(){}
  ngOnInit(): void {
    
  }
  handleData(e:any){
    this.data = e.target.value;
  }

  updateProduct(){
  this.product = new Product();
  this.product.name = this.name;
  this.product.price =this.price;
  }

}
