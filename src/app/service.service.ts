import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getPlayers(teamId: number): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
