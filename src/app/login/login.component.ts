import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { MaterialModule } from 'src/material-module';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  respdata:any;
  constructor(private service: LoginService, private route: Router) {
    localStorage.clear();
   }

  ngOnInit(): void {
  }

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ProdceedLogin(logindata: any) {
    //console.log(logindata.value);
    if (logindata.valid) {
      this.service.Proceddlogin(logindata.value).subscribe(item => {
        this.respdata=item;
        //console.log( this.respdata);
        if(this.respdata!=null){
          //console.log("JWTToken",this.respdata.JWTToken);
          localStorage.setItem('token',this.respdata.JWTToken);
          this.route.navigate(['home']);

        }else{
          alert("Login Failed");
        }
      });
 
    }
  }

  RedirectRegister(){
    this.route.navigate(['access/register']);
  }

}
