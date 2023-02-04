import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs'
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }
  respdata: any;

  RedirectLogin() {
    this.router.navigate(['login']);
  }
  reactiveform = new FormGroup({
    userid: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
  });
  SaveUser() {
    console.log(this.reactiveform.value);
    if (this.reactiveform.valid) {
      this.service.Registeration(this.reactiveform.value).subscribe(item => {
        this.respdata = item;
        if(this.respdata.result=='pass'){
          alertify.success("Registerted successfully please contact admin for activation");
         this.RedirectLogin();
        }else{
          alertify.error('failed try again')
        }
      });
    }
  }

}
