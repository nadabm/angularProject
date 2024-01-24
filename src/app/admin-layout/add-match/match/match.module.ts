import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipe } from '../../add-equipe/equipe/equipe.module';


// match.model.ts
export interface Match {
  matchId: string;
  equipe1: Equipe;
  equipe2: Equipe;
  dateTime: Date;
  stade: string;
  statut: string;
  // judgment: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MatchModule { }
