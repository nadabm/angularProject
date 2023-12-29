import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth-layout/login/login.component';
import { SignUpComponent } from './auth-layout/sign-up/sign-up.component';
import { HeaderComponent } from './acceuil/header/header.component';
import { FooterComponent } from './acceuil/footer/footer.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RecoLayoutComponentComponent } from './reco-layout-component/reco-layout-component.component';
import { HebergementComponent } from './reco-layout-component/hebergement/hebergement.component';
import { DegusterComponent } from './reco-layout-component/deguster/deguster.component';
import { SportComponent } from './reco-layout-component/sport/sport.component';
import { NatureComponent } from './reco-layout-component/nature/nature.component';
import { ShoppingComponent } from './reco-layout-component/shopping/shopping.component';
import { IdeeDeVoyageComponent } from './reco-layout-component/idee-de-voyage/idee-de-voyage.component';
import { NavbarComponent } from './reco-layout-component/navbar/navbar.component';

import { MatchesComponent } from './matches/matches.component';
import { DestinationLayoutComponent } from './destination-layout/destination-layout.component';
import { TangerDestComponent } from './destination-layout/tanger-dest/tanger-dest.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    RecoLayoutComponentComponent,
    HebergementComponent,
    DegusterComponent,
    SportComponent,
    NatureComponent,
    ShoppingComponent,
    IdeeDeVoyageComponent,


    NavbarComponent,
    MatchesComponent,
    DestinationLayoutComponent,
    TangerDestComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
