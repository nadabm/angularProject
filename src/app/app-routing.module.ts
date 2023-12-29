// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-layout/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth-layout/sign-up/sign-up.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component'; // Assuming you have a client layout
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RecoLayoutComponentComponent } from './reco-layout-component/reco-layout-component.component';

import { DegusterComponent } from './reco-layout-component/deguster/deguster.component';

import { MatchesComponent } from './matches/matches.component';
import { HebergementComponent } from './reco-layout-component/hebergement/hebergement.component';
import { IdeeDeVoyageComponent } from './reco-layout-component/idee-de-voyage/idee-de-voyage.component';
import { NatureComponent } from './reco-layout-component/nature/nature.component';
import { ShoppingComponent } from './reco-layout-component/shopping/shopping.component';
import { SportComponent } from './reco-layout-component/sport/sport.component';
import { DestinationLayoutComponent } from './destination-layout/destination-layout.component';
import { TangerDestComponent } from './destination-layout/tanger-dest/tanger-dest.component';


const routes: Routes = [


  {
    path: '',
    component: ClientLayoutComponent, // Use ClientLayoutComponent for the client section
    children: [
      { path: '', component: HomeComponent },

    ],
  },
  {
    path:'/matches', component:MatchesComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
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
        path: 'auth',
        component: RecoLayoutComponentComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'sign-up', component: SignUpComponent },
        ],
  },
            {
        path: 'destination',
        component: DestinationLayoutComponent,
        children: [
          { path: 'tanger', component: TangerDestComponent }

        ],
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
