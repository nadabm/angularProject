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

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
