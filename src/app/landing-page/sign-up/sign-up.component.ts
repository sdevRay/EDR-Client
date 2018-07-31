import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignupService } from "../../services/sign-up.service"


import {
  FormBuilder, // FormBuilder : Handles creating the form
  FormGroup, // FormGroup : Binds all of the elements to one form. It’s a factory method of FormBuilder.
  FormControl // FormControl : Inputs inside of the FormGroup
} from "@angular/forms"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  public signupForm: FormGroup;


  constructor(private form: FormBuilder, private signupService: SignupService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.signupForm = this.form.group({
      email: new FormControl,
      password: new FormControl
    })
  }

  onSubmit() {
    this.signupService
      .register(this.signupForm.value)   
      .subscribe(() => this.signupService.login(this.signupForm.value))
  }

}
