import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4 style="text-align:center">
      <br>
      404 Error. Requested page not found
    </h4>
  `,
  styles: [
    "h4{color:red;font-size:40px}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
