import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css']
})
export class HookChildComponent implements OnInit, OnChanges, DoCheck {
//Data wiil come from hook-child.component.hatml on control parentData and product
@Input() parentData:string;
@Input() product:Product;

constructor(){
console.log('Hook-child constructor called.');
}
ngOnInit(): void {
  console.log('Hook-child ngOnInit called.');
}
ngOnChanges(changes:SimpleChanges){ 
  console.log('Hook-child ngOnChange called.',changes);
  /* console.log('Hook-child ngOnChange currentValue.',changes.parentData.currentValue);
  console.log('Hook-child ngOnChange previousValue.',changes.parentData.previousValue);
  console.log('Hook-child ngOnChange firstChange.',changes.parentData.firstChange);  */
}
ngDoCheck(): void {
  console.log('Hook-child ngDoCheck called.',this.product);
}
}
