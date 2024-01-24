import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// equipe.model.ts
export interface Equipe {
  teamName: string;
  teamLogo?: string;
  teamTrainer?: string;
  playerList?: string;
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EquipeModule { }
