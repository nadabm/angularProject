import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from 'src/app/service.service';

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
  ],
  providers: [ServiceService],

})
export class MatchModule { }
