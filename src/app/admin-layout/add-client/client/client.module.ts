import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Client{
  _id?: string;
  name: string;
  email: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
