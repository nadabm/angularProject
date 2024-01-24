// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RecoLayoutComponentComponent } from './reco-layout-component/reco-layout-component.component';
import { DegusterComponent } from './reco-layout-component/deguster/deguster.component';
import { DestinationLayoutComponent } from './destination-layout/destination-layout.component';
import { TangerDestComponent } from './destination-layout/tanger-dest/tanger-dest.component';
import { HebergementComponent } from './reco-layout-component/hebergement/hebergement.component';
import { IdeeDeVoyageComponent } from './reco-layout-component/idee-de-voyage/idee-de-voyage.component';
import { NatureComponent } from './reco-layout-component/nature/nature.component';
import { ShoppingComponent } from './reco-layout-component/shopping/shopping.component';
import { SportComponent } from './reco-layout-component/sport/sport.component';

import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

import { MatchLayoutComponent } from './match-layout/match-layout.component';
import { MatchesComponent } from './match-layout/matches/matches.component';





const routes: Routes = [


  { path: 'teams', component: TeamsComponent },
  { path: 'players/:teamId', component: PlayersComponent },





  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminnavComponent },
      { path: 'Clients', component: AddClientComponent },
      { path: 'addEquipe', component: AddEquipeComponent },
      { path: 'AddMatches', component: AddMatchComponent },
      // ... other admin panel routes
    ]
    },


  {
        path: 'recom',
        component:  RecoLayoutComponentComponent,
        children: [
          { path: 'deguster', component: DegusterComponent },
          { path: 'hebergement', component: HebergementComponent },
          { path: 'nature', component: NatureComponent },
          { path: 'sport', component: SportComponent },
          { path: 'shopping', component: ShoppingComponent },
          { path: 'idee-de-voyage', component: IdeeDeVoyageComponent },


        ],
      },


            {
        path: 'destination',
        component: DestinationLayoutComponent,
        children: [
          { path: 'tanger', component: TangerDestComponent }

        ],
      },

      {
        path: 'match',
        component: MatchLayoutComponent,
        children: [
          { path: 'matches', component: MatchesComponent },


        ],
      },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
