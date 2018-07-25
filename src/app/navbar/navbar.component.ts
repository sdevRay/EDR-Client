import { Component, OnInit } from '@angular/core';
import { SignupService } from "../services/sign-up.service"


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public signupService: SignupService) { }

  ngOnInit() {
    this.signupService.userInfo.subscribe((userData: UserData) => {
      this.isLoggedIn = userData.isLoggedin;
    })

    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }

  onLogout(){
    this.isLoggedIn = false;
    this.signupService.logout();
  }

  
}

export interface UserData {
  isLoggedin: boolean;
}