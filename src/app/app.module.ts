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
    RecoLayoutComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
