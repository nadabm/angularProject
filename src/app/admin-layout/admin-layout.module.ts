import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarAdComponent } from './navbarAd/navbarAd.component';
import { ClientManagementComponent } from './client-management/client-management.component';



@NgModule({
  declarations: [
    NavbarAdComponent,
    ClientManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    ClientManagementComponent
  ]
})
export class AdminLayoutModule { }
