// teams.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any[] = [
    // ... Vos données d'équipe ...
  ];
  teamService: any;
  constructor(private router: Router, teamService: TeamService)  {}
  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.teamService.getTeams().subscribe(
      (data: any[]) => {
        this.teams = data;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des données des équipes.', error);
      }
    );
  }

  showPlayers(team: any): void {
    // Naviguer vers la page des joueurs avec l'ID de l'équipe
    this.router.navigate(['/players', team.id]);
  }
  navigateToPlayers(teamId: number) {
    this.router.navigate(['/players', teamId]);
  }
}









