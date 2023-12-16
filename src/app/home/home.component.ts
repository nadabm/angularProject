import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  // Fonction appelée lorsque le bouton "Lire la suite" est cliqué avec un paramètre 'destination'
  lireLaSuite(destination: string) {
    switch (destination) {
      case 'hebergement':
        this.router.navigate(['/recom/hebergement']);
        break;
      case 'deguster':
        this.router.navigate(['/recom/deguster']);
        break;
      case 'sport':
        this.router.navigate(['/recom/sport']);
        break;
      case 'nature':
        this.router.navigate(['/recom/nature']);
        break;
      case 'shopping':
        this.router.navigate(['/recom/shopping']);
        break;
      case 'idee-de-voyage':
        this.router.navigate(['/recom/idee-de-voyage']);
        break;

      // Ajoutez des cas pour d'autres destinations selon vos besoins

      default:
        break;
    }



}

}
