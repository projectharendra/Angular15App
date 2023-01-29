import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-childdemo',
  templateUrl: './childdemo.component.html'
})
export class ChilddemoComponent implements OnInit {
@Input() parentData:string;
ngOnInit():void{ 
}

}
