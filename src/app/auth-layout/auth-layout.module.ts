import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent

],
  imports: [
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,  // Add this line


  ],
   exports: [LoginComponent, RouterModule], // Add RouterModule to exports if needed



})
export class AuthLayoutModule { }
