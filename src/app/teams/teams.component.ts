
// teams.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  constructor(private router: Router) {}



  navigateToPlayers(teamId: number) {
    this.router.navigate(['/players', teamId]);
  }
}








