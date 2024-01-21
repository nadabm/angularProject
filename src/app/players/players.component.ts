// players.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from './player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  template: `
  <div *ngFor="let player of players">
    <img [src]="player.photoUrl" alt="{{ player.name }} Photo" />
    <p>{{ player.name }}</p>
    <p>{{ player.position }}</p>
  </div>
`,
})
export class PlayersComponent {
  players: Player[] = [
    { name: 'Joueur 1', photoUrl: 'url1.jpg', position: 'Attaquant' },
    { name: 'Joueur 2', photoUrl: 'url2.jpg', position: 'Milieu de terrain' },
    // Ajoutez d'autres joueurs si nécessaire
  ];

  // player.model.ts

// players.component.ts






}



