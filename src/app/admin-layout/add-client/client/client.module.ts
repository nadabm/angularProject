import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User{
  id: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;

}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClientModule {

 }
