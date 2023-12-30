// app.module.ts
import { AppRoutingModule } from './app-routing.module';
import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CentralComponent } from './central/central.component';
import { Developmentmaturity1Component } from './developmentmaturity1/developmentmaturity1.component';
import { QualityOverviewComponent } from './quality-overview/quality-overview.component';
import { MaturityDevelopment2Component } from './maturity-development2/maturity-development2.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
// import { TrackProjectComponent } from './track-project/track-project.component';
// import { TimeStatusComponent } from './time-status/time-status.component';
import { ProjectmasterComponent } from './projectmaster/projectmaster.component';
import { DeveloperdashboardComponent } from './developerdashboard/developerdashboard.component';
import { TimeStatusComponent } from './timestatus/timestatus.component';
import { CoststatusComponent } from './coststatus/coststatus.component';
import { RiskoverviewComponent } from './riskoverview/riskoverview.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//  import { MatButtonModule } from '@angular/material';
import { CentralService } from '../app/central/central.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navbar1Component } from './navbar1/navbar1.component'; // Update the path based on your actual file structure

// import { QualityOverviewComponent } from './quality-overview/quality-overview.component'; // Import the LoginComponent

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CentralComponent,
    Developmentmaturity1Component,
    QualityOverviewComponent,
    MaturityDevelopment2Component,
    CoverPageComponent,
    ProjectmasterComponent,
    DeveloperdashboardComponent,
    TimeStatusComponent,
    CoststatusComponent,
    RiskoverviewComponent,
    DashbaordComponent,
    Navbar1Component,

  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgClass
    // MatButtonModule
  ],
  providers: [CentralService],
  bootstrap: [AppComponent,
    DeveloperdashboardComponent,
    CentralComponent,
    LoginComponent,
    RegistrationComponent,
    CoverPageComponent,
    ProjectmasterComponent,
    TimeStatusComponent,
    CoststatusComponent,
    RiskoverviewComponent,
    CentralService,
    DashbaordComponent]
})
export class AppModule { }




// src/app/app.module.ts

