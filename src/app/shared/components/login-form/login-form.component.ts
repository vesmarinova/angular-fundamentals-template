import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;
  //Use the names `email` and `password` for form controls.
  loginButtonText:string = "login";
  loginEmail:string="";
  loginPassword:string="";
  
  formSubmitted:boolean=false;
  

  submitLoginHandler(loginForm:NgForm) {
    this.formSubmitted =  true;
    console.log(loginForm);
    
  }
}

