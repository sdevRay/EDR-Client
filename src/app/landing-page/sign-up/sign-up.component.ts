import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  private signupForm: FormGroup;

  constructor(private form: FormBuilder, private http: HttpClient) { }

  User: {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.signupForm = this.form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    })
  }

  onSubmit(User) {
    return this.http.post('https://localhost:3000/user/create', User).toPromise().then((data) => console.log(data))
  }

}
