import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Match } from '../add-match/match/match.module';

@Component({
  selector: 'app-voir-match',
  templateUrl: './voir-match.component.html',
  styleUrls: ['./voir-match.component.css']
})
export class VoirMatchComponent {
useStaticData = true; // Set this flag to true to use static data, false to fetch from the API
 matches: Match[] = [];
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    // Sample data (seeds)
    const match1: Match = {
      equipe1: { teamName: 'Team A', teamTrainer: 'Country A' },
      equipe2: { teamName: 'Team B', teamTrainer: 'Country B' },
      dateTime: new Date('2024-01-24T12:00:00'),
      stade: 'Stadium 1',
      statut: 'Scheduled',
      matchId: '1'
    };
    const match2: Match = {
      equipe1: { teamName: 'Team A', teamTrainer: 'Country A' },
      equipe2: { teamName: 'Team B', teamTrainer: 'Country B' },
      dateTime: new Date('2024-01-24T12:00:00'),
      stade: 'Stadium 1',
      statut: 'Scheduled',
      matchId: ''
    };
    const match3: Match = {
      equipe1: { teamName: 'Team A', teamTrainer: 'Country A' },
      equipe2: { teamName: 'Team B', teamTrainer: 'Country B' },
      dateTime: new Date('2024-01-24T12:00:00'),
      stade: 'Stadium 1',
      statut: 'Scheduled',
      matchId: ''
    };


    this.matches.push(match1, match2, match3);

  }
    getAllMatches(): void {
    this.serviceService.getAllMatches().subscribe((matches) => {
      this.matches = matches;
    });
  }

  // Function to delete a match
  deleteMatch(matchId: string): void {
    this.serviceService.deleteMatch(matchId).subscribe(() => {
      // Reload the matches after deletion
      this.getAllMatches();
    });
  }
}
