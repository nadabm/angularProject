// matches.component.ts
import { Component, OnInit } from '@angular/core';
import { MatchService } from '../matches/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any[] = [];

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.matchService.getMatches().subscribe(
      (data) => {
        this.matches = data;
      },
      (error) => {
        console.error('Error loading matches:', error);
      }
    );
  }
}

