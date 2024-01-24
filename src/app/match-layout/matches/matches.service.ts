// matches.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private backendUrl = 'URL_DE_VOTRE_BACKEND';  // Remplacez par l'URL réelle de votre backend

  constructor(private http: HttpClient) {}

  getAllMatches(groupNumber: number): Observable<any[]> {
    // Utilisez HttpClient pour faire un appel GET vers votre backend
    return this.http.get<any[]>(`${this.backendUrl}/api/matches/group${groupNumber}`);
  }
}

