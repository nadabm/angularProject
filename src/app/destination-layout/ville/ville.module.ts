import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Ville{
  id: string;
  descreption: string;
  photo: BinaryType;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VilleModule { }
