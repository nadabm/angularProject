// match.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = 'http://localhost:8080/api/matches'; // Remplacez par votre URL backend

  constructor(private http: HttpClient) {}

  getMatches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
