import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { PasswordValidator } from '../shared/password.validator';
import { forbiddenNameValidator } from '../shared/username.validator';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  /*Reactive Form Validations
  https://www.youtube.com/watch?v=ZQroyD2rLzY&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=22 */


  registrationForm:FormGroup;

  //Create getter of userName Control
  get userName(){
    return this.registrationForm.get('userName');
  }
    //Create getter of email Control
  get email(){
    return this.registrationForm.get('email');
  }
    //Create getter of alternateEmails FormArray
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  //Add alternate email control on browser
  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb:FormBuilder,private _registrationService: RegistrationService){ }

  ngOnInit(): void { 
    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/),forbiddenNameValidator(/admin/)]],
      email:[''],
      subscribe:[false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { Validator: PasswordValidator });

   //Conditional Validation
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue =>{
      const email = this.registrationForm.get('email');
      if(checkedValue){email.setValidators(Validators.required);}
      else{email.clearValidators();}
      email.updateValueAndValidity();
    });


  }
   /*
   //https://www.youtube.com/watch?v=nm-x8gsqB2E&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=23
   In userName field (forbiddenNameValidator) - password and admin is not allowed
   */
  

  loadApiData(): void{
    //this.registrationForm.patchValue({
      this.registrationForm.setValue({
      userName: 'Harendra',
      password: 'test',
      confirmPassword:  'test',
      address:{
        city: 'City',
        state: 'State',
        postalCode: '110096'
      }
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      Response => console.log('Success!', Response),
      error => console.error('Error!',error)
    );
  }

}
