import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html'  
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  //ViewChild
  //@ViewChild("highlight")marker:ElementRef;

  //ViewChildren
  @ViewChildren("highlight") marker:QueryList<any>;

  //Reference of child component (CounterComponent which is in parent (childview) html) to parent
  @ViewChild('childView') child:CounterComponent;
inc(){
  this.child.increment();
}
dec(){
  this.child.decrement();
}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //View Child
        // console.log(this.marker);
        // this.marker.nativeElement.style.color="red";
    //View Children
        console.log(this.marker);
        this.marker.first.nativeElement.style.color="red";
        this.marker.last.nativeElement.style.color="green";
  }
}

/*
                  IN JAVA SCRIPT
          <div id="container">this is my Div</div>                 
        const output = document.getElementById('container');                   
        output.innerHTML="New Text"
-----------------------------------------------------------------
                    IN ANGULAR
          <div id="container">this is my Div</div>                     
           @ViewChild("container")output:ElementRef; 
*/

