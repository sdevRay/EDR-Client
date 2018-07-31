import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/sign-up.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
    // LOGS USER INTO DASHBOARD AUTOMATICALLY IF TOKEN IS PRESENT
    if(this.signupService.getToken()){
      this.router.navigate(['/dashboard'])
    }
  }

}
