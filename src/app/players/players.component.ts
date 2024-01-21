// players.component.ts

// players.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];

  constructor(private route: ActivatedRoute, private serviceService: ServiceService) {}

  ngOnInit(): void {
  // Récupérer l'ID de l'équipe à partir de l'URL
  const idParam = this.route.snapshot.paramMap.get('id');
  const teamId = idParam !== null ? +idParam : 0; // Default to 0 if 'id' is null

  // Charger les joueurs en fonction de l'ID de l'équipe
  this.players = this.serviceService.getPlayers(teamId);
}
}











