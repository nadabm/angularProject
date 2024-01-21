import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth-layout/login/login.component';
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

import { SignUpComponent } from './auth-layout/sign-up/sign-up.component'; // Import SignUpComponent


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DestinationLayoutComponent } from './destination-layout/destination-layout.component';
import { TangerDestComponent } from './destination-layout/tanger-dest/tanger-dest.component';
import { MatchLayoutComponent } from './match-layout/match-layout.component';
import { MatchesComponent } from './match-layout/matches/matches.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';





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
    PlayersComponent,

    NavbarComponent,

    DestinationLayoutComponent,
    TangerDestComponent,
    MatchLayoutComponent,
    MatchesComponent,
    TeamsComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
