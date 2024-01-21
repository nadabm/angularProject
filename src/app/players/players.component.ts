// players.component.ts

// players.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'équipe à partir de l'URL
    const teamId = +this.route.snapshot.paramMap.get('id');

    // Charger les joueurs en fonction de l'ID de l'équipe
    this.players = this.dataService.getPlayers(teamId);
  }
}











