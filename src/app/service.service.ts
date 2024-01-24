import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Match } from './admin-layout/add-match/match/match.module';
import { Equipe } from './admin-layout/add-equipe/equipe/equipe.module';
import { User } from './admin-layout/add-client/client/client.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 equipes: any[] = [];
  // Seed data for initial equipes
  private seedEquipes: Equipe[] = [
    { teamName: 'Morocco', teamLogo: 'assets/moroccoFlag.png', teamTrainer: 'Regragui walid', playerList: 'Achraf Hakimi, Hakim Ziyech' },
    { teamName: 'Portugal', teamLogo: 'assets/portugal.png', teamTrainer: 'Roberto Martinez', playerList: 'Raphaël Guerreiro, Cristiano Ronaldo (captain)' },
    { teamName: 'spain', teamLogo: 'assets/spain.png', teamTrainer: ' Luis de la Fuente', playerList: '	Dani Carvajal' },
  ];
  getPlayers(teamId: number): any[] {
    throw new Error('Method not implemented.');
  }
private apiUrl = 'http://your-api-url'; // Replace with your MongoDB API URL

  constructor(private http: HttpClient) {}

getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.apiUrl}/clients`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching clients:', error);
        // You can return a default value or rethrow the error as needed
        return of([]);
      })
    );
}

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/clients/${id}`);
  }

  createUser(User: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/clients`, User);
  }

  updateUser(id: string, User: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/clients/${id}`, User);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clients/${id}`);
  }
  //---------------------------------------equipe adminn-------------//
  addEquipe(equipe: Equipe): Observable<void> {
    return this.http.post<void>(this.apiUrl, equipe);
  }
  //-------------------------------voir Equipe--------------------------------//
  //getEquipes(): void {
  // Comment out or remove the API request
  // this.serviceService.getEquipes().subscribe(
  //   (apiResponse) => {
  //     const apiEquipes = Array.isArray(apiResponse) ? apiResponse : apiResponse?.equipes;
  //     this.equipes = [...this.seedEquipes, ...(apiEquipes || [])];
  //   },
  //   (error) => {
  //     console.error('Error fetching equipes:', error);
  //   }
  // );

  // Use only seed data without making an API request
  //this.equipes = [...this.seedEquipes];
//}
  getEquipes(): Observable<Equipe[]> {
    // Return only the seed data
    return of(this.seedEquipes);
  }



  updateEquipe(equipe: Equipe): Observable<void> {
    const url = `${this.apiUrl}/${equipe.teamName}`;
    return this.http.put<void>(url, equipe);
  }

  deleteEquipe(teamName: string): Observable<void> {
    const url = `${this.apiUrl}/${teamName}`;
    return this.http.delete<void>(url);
  }
  //------------------add-match---------------------------------//
   getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/matches`);
  }

  createMatch(newMatch: Match): Observable<Match> {
    return this.http.post<Match>(`${this.apiUrl}/matches`, newMatch);
  }

  updateMatch(matchId: string, updatedMatch: Match): Observable<Match> {
    return this.http.put<Match>(`${this.apiUrl}/matches/${matchId}`, updatedMatch);
  }

deleteMatch(matchId: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/matches/${matchId}`)
    .pipe(
      catchError((error) => {
        console.error(`Error deleting match with ID ${matchId}:`, error);
        // Handle the error as needed, e.g., show a user-friendly message
        return throwError('An error occurred while deleting the match.');
      })
    );
}
}
