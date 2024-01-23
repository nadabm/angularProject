import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth-layout/login/login.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './acceuil/footer/footer.component';
import { HeaderComponent } from './acceuil/header/header.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RecoLayoutComponentComponent } from './reco-layout-component/reco-layout-component.component';
import { SignUpComponent } from './auth-layout/sign-up/sign-up.component'; // Import SignUpComponent
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchLayoutComponent } from './match-layout/match-layout.component';
import { MatchesComponent } from './match-layout/matches/matches.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { DestinationLayoutComponent } from './destination-layout/destination-layout.component';
import { TangerDestComponent } from './destination-layout/tanger-dest/tanger-dest.component';
import { DegusterComponent } from './reco-layout-component/deguster/deguster.component';
import { HebergementComponent } from './reco-layout-component/hebergement/hebergement.component';
import { IdeeDeVoyageComponent } from './reco-layout-component/idee-de-voyage/idee-de-voyage.component';
import { NatureComponent } from './reco-layout-component/nature/nature.component';
import { NavbarComponent } from './reco-layout-component/navbar/navbar.component';
import { ShoppingComponent } from './reco-layout-component/shopping/shopping.component';
import { SportComponent } from './reco-layout-component/sport/sport.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthLayoutModule } from './auth-layout/auth-layout.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { ServiceService } from './service.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
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

    AuthLayoutComponent,
    MatchLayoutComponent,
    MatchesComponent,
    TeamsComponent,
    TeamsComponent,


    TangerDestComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthLayoutModule,
    AdminLayoutModule,
    CommonModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],

})
export class AppModule { }
