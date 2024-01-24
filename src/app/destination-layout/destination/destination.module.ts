import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Destination{
  id: string;
  title: string;
  description: string;
  photo: string;

 }


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DestinationModule { }
