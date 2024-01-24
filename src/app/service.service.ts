import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, merge, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Match } from './admin-layout/add-match/match/match.module';
import { Equipe } from './admin-layout/add-equipe/equipe/equipe.module';
import { User } from './admin-layout/add-client/client/client.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  [x: string]: any;
 equipes: any[] = [];
  // Seed data for initial equipes
  private seedEquipes: Equipe[] = [
    { teamName: 'Morocco', teamLogo: 'assets/moroccoFlag.png', teamTrainer: 'Regragui walid', playerList: 'Achraf Hakimi, Hakim Ziyech' },
    { teamName: 'Portugal', teamLogo: 'assets/portugal.png', teamTrainer: 'Roberto Martinez', playerList: 'Raphaël Guerreiro, Cristiano Ronaldo (captain)' },
    { teamName: 'spain', teamLogo: 'assets/spain.png', teamTrainer: ' Luis de la Fuente', playerList: '	Dani Carvajal' },
    { teamName: 'italy', teamLogo: 'assets/italy.png', teamTrainer: '  Luciano Spalletti', playerList: 'Gianluigi Donnarumma (captain)' },
    { teamName: 'croatia', teamLogo: 'assets/croatia.png', teamTrainer: ' Luis de Zlatko ', playerList: '	Dani Carvajal' },
  ];

    seedUsers: User[] = [
    { id: '1', nom: 'John', prenom: 'Doe', email: 'john.doe@example.com', password: ''},
    { id: '2', nom: 'Jane', prenom: 'Smith', email: 'jane.smith@example.com' , password:''},
    { id: '3', nom: 'Alice', prenom: 'Johnson', email: 'alice.johnson@example.com' , password:''},
    // Add more users as needed
  ];
  getPlayers(teamId: number): any[] {
    throw new Error('Method not implemented.');
  }
private apiUrl = 'http://192.168.0.119:8080/api/v1/football'; // Replace with your MongoDB API URL

  constructor(private http: HttpClient) {

      this.equipes = [...this.seedEquipes];
  }

getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.apiUrl}/users`)
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

  // updateUser(id: string): Observable<User> {
  //   return this.http.put<User>(`${this.apiUrl}/clients/${id}`);
  // }

 deleteUser(id: string): Observable<void> {
    // Assuming this method triggers an API call, update it to handle the deletion from seed data as well
    const url = `${this.apiUrl}/users/${id}`;

    // Make the API call
    const apiCall = this.http.delete<void>(url);

    // Handle the deletion from seed data as well
    const seedDataUpdate = apiCall.pipe(
      tap(() => {
        // Update the seedUsers array by removing the user with the specified id
        this.seedUsers = this.seedUsers.filter(user => user.id !== id);
      }),
      catchError(() => {
        // Handle errors if necessary, for now, just return an empty observable
        return of();
      })
    );

    // Return the merged observable
    return merge(apiCall, seedDataUpdate);
  }
  //---------------------------------------equipe adminn-------------//
  addEquipe(equipe: Equipe): Observable<void> {
    const apiCall = this.http.post<void>(this.apiUrl, equipe);

    // Handle the addition to seed data as well
    const seedDataUpdate = apiCall.pipe(
      tap(() => {
        this.seedEquipes = [...this.seedEquipes, equipe];
      }),
      catchError(() => {
        // Handle errors if necessary, for now, just return an empty observable
        return of();
      })
    );

    // Return the merged observable
    return merge(apiCall, seedDataUpdate);
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



  // updateEquipe(equipe: Equipe): Observable<void> {
  //   const url = `${this.apiUrl}/${equipe.teamName}`;
  //   return this.http.put<void>(url, equipe);
  // }

deleteEquipe(teamName: string): Observable<void> {
  const url = `${this.apiUrl}/${teamName}`;

  // Make the API call
  const apiCall = this.http.delete<void>(url);

  // Handle the deletion from seed data as well
  return apiCall.pipe(
    tap(() => {
      // Update the seedEquipes array by removing the equipe with the specified teamName
      this.seedEquipes = this.seedEquipes.filter(equipe => equipe.teamName !== teamName);
    }),
    catchError(() => {
      // Handle errors if necessary, for now, just return an empty observable
      return of();
    })
  );
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
  //------------------------login handling -----------------------------------------------------//
  // Simulated user data
  private adminUser = { username: 'admin', password: 'admin' };
  private clientUser = { username: 'client', password: 'client' };

  login(username: string, password: string): Observable<boolean> {
    // Simulate server-side authentication

  console.log('Attempting login with:', username, password);
    if ((username === this.adminUser.username && password === this.adminUser.password) ||
        (username === this.clientUser.username && password === this.clientUser.password)) {
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return of(true);
    } else {
     console.log('Authentication failed');
  return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
}
