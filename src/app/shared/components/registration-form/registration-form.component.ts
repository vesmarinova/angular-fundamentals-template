import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorDirective } from '@app/shared/directives/email.directive';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  // Use the names `name`, `email`, `password` for the form controls.
 
 
 
  formSubmitted:boolean=false;

 ngOnInit(): void {
   this.registrationForm= new FormGroup({
    'name':new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'email':new FormControl(null,[Validators.required]),
    'password':new FormControl(null, Validators.required),
   });
 }


 submitRegistrationHandler (registrationForm:FormGroup) {
  this.formSubmitted=true;
  console.log(this.registrationForm);
  
 }

 
 
  registrationBtnText:string="login"
}
  