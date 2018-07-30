import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LandingPageComponent } from './landing-page/landing-page.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { LoginComponent } from './landing-page/login/login.component';

import { DashGuard } from "./guards/dash.guards"

const routes: Routes = [
    { path: '/', redirectTo: 'landingpage/login', pathMatch: 'full' },
    {
        path: 'landingpage', component: LandingPageComponent,
        children: [
            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },

        ]
    },
    {
        path: 'dashboard', canActivate: [DashGuard],
        children: [ { path: "", component: DashboardComponent } ]
    },
    { path: '**', component: PageNotFoundComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }