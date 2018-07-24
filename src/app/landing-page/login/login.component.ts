import { Component, OnInit } from '@angular/core';

import { 
  FormBuilder, // FormBuilder : Handles creating the form
  FormGroup, // FormGroup : Binds all of the elements to one form. It’s a factory method of FormBuilder.
  FormControl // FormControl : Inputs inside of the FormGroup
} from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  
  
  createForm(): void {
    this.loginForm = this.form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    })
    console.log(this.loginForm.value)
  }

  
  onSubmit() {
    console.log(this.loginForm.value)
  }

}
