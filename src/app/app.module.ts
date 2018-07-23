import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { LoginComponent } from './landing-page/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './dashboard/events/events.component';
import { BaseFitnessComponent } from './dashboard/base-fitness/base-fitness.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    EventsComponent,
    BaseFitnessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
