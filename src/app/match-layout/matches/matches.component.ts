import { Component } from '@angular/core';
import { MatchesService } from './matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})


export class MatchesComponent   {
  constructor(private matchesService: MatchesService) {}
      // Dans votre composant ou service
matchesGroup1: any[] = [
  { team1: 'Argentine', team2: 'France', score: '2-1', date: '2024-01-23', time: '18:00', stadium: 'Stade A' },
  // ... autres matches pour le groupe 1
];
matchesGroup2: any[] = [
  { team3: 'Morocco', team4: 'Croatia', score: '3-2', date: '2024-01-24', time: '20:00', stadium: 'Stade B' },
  // ... autres matches pour le groupe 2
];
matchesGroup3: any[] = [
  { team3: 'Morocco', team4: 'Croatia', score: '3-2', date: '2024-01-24', time: '20:00', stadium: 'Stade B' },
  // ... autres matches pour le groupe 2
];
matchesGroup4: any[] = [
  { team3: 'Morocco', team4: 'Croatia', score: '3-2', date: '2024-01-24', time: '20:00', stadium: 'Stade B' },
  // ... autres matches pour le groupe 2
];
matchesGroup5: any[] = [
  { team3: 'Morocco', team4: 'Croatia', score: '3-2', date: '2024-01-24', time: '20:00', stadium: 'Stade B' },
  // ... autres matches pour le groupe 2
];
matchesGroup6: any[] = [
  { team3: 'Morocco', team4: 'Croatia', score: '3-2', date: '2024-01-24', time: '20:00', stadium: 'Stade B' },
  // ... autres matches pour le groupe 2
];
matchesGroup7: any[] = [
  { team3: 'Morocco', team4: 'Croatia', score: '3-2', date: '2024-01-24', time: '20:00', stadium: 'Stade B' },
  // ... autres matches pour le groupe 2
];
matchesGroup8: any[] = [
  { team3: 'Morocco', team4: 'Croatia', score: '3-2', date: '2024-01-24', time: '20:00', stadium: 'Stade B' },
  // ... autres matches pour le groupe 2
];


ngOnInit(): void {
  this.loadMatchesData(1); // Charger les données du groupe 1 lors de l'initialisation du composant
}


loadMatchesData(groupNumber: number): void {
  this.matchesService.getAllMatches(groupNumber).subscribe(
    (data) => {
      this.matchesGroup1 = data;
    },
    (error) => {
      console.error('Une erreur s\'est produite lors de la récupération des données des matchs.', error);
    }
  );
}



}
