import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/sign-up.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(public signupService: SignupService) { }

  ngOnInit() {

  }

}