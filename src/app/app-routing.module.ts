import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent} from './landing-page/landing-page.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
    {path: '', redirectTo: '/landingpage', pathMatch: 'full'},
    {path: 'landingpage', component: LandingPageComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}