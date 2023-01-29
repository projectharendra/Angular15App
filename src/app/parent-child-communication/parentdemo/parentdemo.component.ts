import { Component } from '@angular/core';

@Component({
  selector: 'app-parentdemo',
  templateUrl: './parentdemo.component.html',  
})
export class ParentdemoComponent {
 
  userName: string = "Parent to child...";
  parentData = "";
  TransferDataFromParentToChild(){
    this.parentData = this.userName;
  }
 /////////////////////////////////////////////////////
  childData!:string;
  parentMethod(data:any){
   this.childData = data
  }

}
/*

Parent and Child component communication


1. Data transfer from Parent to Child component
	@Input - in child component
2. Data transfer from  Child to Parent component
	@Output - in child component and EventEmittor in child component.


Design:-
1. Add child selector (<app-childdemo></app-childdemo>) to parent html (parentdemo.component.html).
2. Add a property to child component 
 <app-childdemo [parentData]="parentData"></app-childdemo>   
3. Crate a property parentData in parent component page
4. Add same property name in child component (app-childdemo) html page   
 	<h4>Child Component</h4> {{parentData}}
5. In child component file add same property with @Input decorator
	@Input() parentData:string;

*/