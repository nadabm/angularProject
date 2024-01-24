// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth-layout/sign-up/sign-up.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component'; // Assuming you have a client layout
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
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

import { LoginComponent } from './auth-layout/login/login.component';
import { AddClientComponent } from './admin-layout/add-client/add-client.component';
import { AdminnavComponent } from './admin-layout/adminnav/adminnav.component';
import { AddEquipeComponent } from './admin-layout/add-equipe/add-equipe.component';
import { MatchLayoutComponent } from './match-layout/match-layout.component';
import { MatchesComponent } from './match-layout/matches/matches.component';
import { AddMatchComponent } from './admin-layout/add-match/add-match.component';
import { VoirEquipeComponent } from './admin-layout/Tables/voir-equipe/voir-equipe.component';
import { VoirMatchComponent } from './admin-layout/Tables/voir-match/voir-match.component';




const routes: Routes = [


  { path: 'teams', component: TeamsComponent },
  { path: 'players/:teamId', component: PlayersComponent },


  {
    path: '',
    component: ClientLayoutComponent, // Use ClientLayoutComponent for the client section
    children: [
      { path: '', component: HomeComponent },

    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminnavComponent },
      { path: 'Clients', component: AddClientComponent },
      { path: 'addEquipe', component: AddEquipeComponent },
      { path: 'AddMatches', component: AddMatchComponent },

      { path: 'voirEquipe', component: VoirEquipeComponent },
      { path: 'voirMatch', component: VoirMatchComponent },

      // ... other admin panel routes

    ],
  },
  {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'sign-up', component: SignUpComponent },
        ],
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
