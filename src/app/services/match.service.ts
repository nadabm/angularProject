import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  Joueurs! : Array<any>;

  constructor() {
    this.Joueurs=[
      {id:1, name:"ali",age:24},
      {id:2, name:"alae",age:25},
      {id:3, name:"ahmed",age:28}

    ];
   }
   public getAllJoueurs(): Observable<Array<any>>{
    return of(this.Joueurs);
   }
   public deleteJoueurs(id: number ): Observable<boolean>{
    this.Joueurs=this.Joueurs.filter(p=>p.id!=id);
    return of(true);

   }


}
