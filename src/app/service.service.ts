import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getPlayers(teamId: number): any[] {
    throw new Error('Method not implemented.');
  }
private apiUrl = 'http://your-api-url'; // Replace with your MongoDB API URL

  constructor(private http: HttpClient) {}



}
