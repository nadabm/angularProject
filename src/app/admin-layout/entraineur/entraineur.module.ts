import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipe } from '../add-equipe/equipe/equipe.module';

export interface Entraineur {
  id: string;
  nomComplet: string;
  age: number;
  equipe: Equipe;
  photo: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EntraineurModule { }
