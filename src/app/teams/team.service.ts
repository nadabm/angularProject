// team.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private backendUrl = 'URL_DE_VOTRE_BACKEND';  // Remplacez par l'URL réelle de votre backend

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/api/teams`);
  }
}
