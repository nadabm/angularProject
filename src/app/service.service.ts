import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './admin-layout/add-client/client/client.module';
import { Match } from './admin-layout/add-match/match/match.module';
import { Equipe } from './admin-layout/add-equipe/equipe/equipe.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getPlayers(teamId: number): any[] {
    throw new Error('Method not implemented.');
  }
private apiUrl = 'http://your-api-url'; // Replace with your MongoDB API URL

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }

  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/clients/${id}`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/clients`, client);
  }

  updateClient(id: string, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/clients/${id}`, client);
  }

  deleteClient(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clients/${id}`);
  }
  //---------------------------------------equipe adminn-------------//
    addEquipe(equipe: Equipe): Observable<any> {
    // Add logic to send POST request to your API
    return this.http.post(`${this.apiUrl}/equipes`, equipe);
    }
  //------------------add-match---------------------------------//
    addMatch(matchData: Match): Observable<any> {
    return this.http.post(`${this.apiUrl}/matches`, matchData);
  }
}
