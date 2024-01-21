
// teams.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teams: any[] = [
    // ... Vos données d'équipe ...
  ];
  constructor(private router: Router) {}


  showPlayers(team: any): void {
    // Naviguer vers la page des joueurs avec l'ID de l'équipe
    this.router.navigate(['/players', team.id]);
  }
  navigateToPlayers(teamId: number) {
    this.router.navigate(['/players', teamId]);
  }
}








