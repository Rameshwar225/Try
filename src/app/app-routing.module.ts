// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Developmentmaturity1Component } from './developmentmaturity1/developmentmaturity1.component';
import { CentralComponent } from './central/central.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { QualityOverviewComponent } from './quality-overview/quality-overview.component';
import { DeveloperdashboardComponent } from './developerdashboard/developerdashboard.component';
import { ProjectmasterComponent } from './projectmaster/projectmaster.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { MaturityDevelopment2Component } from './maturity-development2/maturity-development2.component';
import { TimeStatusComponent } from './timestatus/timestatus.component';
import { CoststatusComponent } from './coststatus/coststatus.component';
import { RiskoverviewComponent } from './riskoverview/riskoverview.component';
import { Navbar1Component } from './navbar1/navbar1.component';



const routes: Routes = [
  { path: 'cover-page', component: CoverPageComponent },
  { path: 'projectmaster', component: ProjectmasterComponent },
  { path: 'developerdashboard', component: DeveloperdashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'developmentmaturity1', component: Developmentmaturity1Component },
  { path: 'maturity-development2', component: MaturityDevelopment2Component },
  { path: 'quality-overview', component: QualityOverviewComponent },
  { path: 'central', component: CentralComponent },
  { path: 'developerdashboard/:projectName/:projectNumber', component: DeveloperdashboardComponent },
  { path: 'timestatus', component: TimeStatusComponent },
  { path: 'coststatus', component: CoststatusComponent },
  { path: 'riskoverview', component: RiskoverviewComponent },
  { path: 'navbar1', component: Navbar1Component },

  // Add a route for developmentmaturity without the '1' in the URL
  // { path: 'developmentmaturity', component: Developmentmaturity1Component },
  // { path: '', redirectTo: '/quality-overview', pathMatch: 'full' },
  {
    path: 'developerdashboard/:projectName/:projectNumber',
    component: DeveloperdashboardComponent,
    children: [
      { path: 'cover-page', component: CoverPageComponent },
      { path: 'projectmaster', component: ProjectmasterComponent },
      { path: 'developmentmaturity1', component: Developmentmaturity1Component },
      { path: 'maturity-development2', component: MaturityDevelopment2Component },
      { path: 'quality-overview', component: QualityOverviewComponent },
      { path: 'timestatus', component: TimeStatusComponent },
      { path: 'coststatus', component: CoststatusComponent },
      { path: 'riskoverview', component: RiskoverviewComponent },
    ],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: Navbar1Component, pathMatch: 'full' },

  // { path: '', redirectTo: '/developerdashboard', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app-routing.module.ts