import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AddClientComponent } from './add-client/add-client.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { AddMatchComponent } from './add-match/add-match.component';



@NgModule({
  declarations: [

    AddClientComponent,
    AdminnavComponent,
    AddEquipeComponent,
    AddMatchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [AdminnavComponent,
    AddClientComponent,
     AddEquipeComponent,
    AddMatchComponent]
})
export class AdminLayoutModule { }