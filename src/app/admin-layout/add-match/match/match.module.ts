import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// match.model.ts
export interface Match {
  equipe1: string;
  equipe2: string;
  hour: string;
  stadium: string;
  judgment: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MatchModule { }
