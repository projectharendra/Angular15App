import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styles:[]
})
export class ProductWidgetComponent implements OnInit {
  @Input() products:any[];
  ngOnInit(): void {
    
  }


}
