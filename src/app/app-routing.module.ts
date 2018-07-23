import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent} from './landing-page/landing-page.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { LoginComponent } from './landing-page/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: '/landingpage', pathMatch: 'full'},
    {path: 'landingpage', component: LandingPageComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: PageNotFoundComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}