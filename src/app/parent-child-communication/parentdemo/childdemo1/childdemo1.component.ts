import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-childdemo1',
  templateUrl: './childdemo1.component.html'
})
export class Childdemo1Component implements OnInit {

@Output() public notify = new EventEmitter<string>();

ngOnInit():void{
 
}
passData(){
  this.notify.emit('Data is coming from child to parant');
}

}
