
// player.component.ts
// players.component.ts

// players.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];

  constructor(private route: ActivatedRoute, private serviceService: ServiceService) {}
  cardsDataGoalkeeper = [
    { index: 1, title: '', text: 'yassine BOUNOU' ,imageUrl: '/assets/photosdesjoueurs/Yassine-Bounou.jpg'},
    { index: 2, title: '', text: 'monir EL KAJOUI' ,imageUrl: '/assets/photosdesjoueurs/monir EL KAJOUI.jpg'},
    { index: 3, title: '', text: 'ahmed TAGNAOUTI' ,imageUrl: '/assets/photosdesjoueurs/ahmed TAGNAOUTI.jpg'},
    // ... ajoutez d'autres données pour chaque carte
  ];
  cardsData2 = [
    { index: 4, title: '', text: 'achraf HAKIMI' ,imageUrl: '/assets/photosdesjoueurs/hakimi.jpg'},
    { index: 5, title: '', text: 'Noussair MAZRAOUI' ,imageUrl: '/assets/photosdesjoueurs/noussair.jpeg'},
    { index: 6, title: '', text: 'Nayef AGUERD' ,imageUrl: '/assets/photosdesjoueurs/nayef.jpeg'},
    { index: 7, title: '', text: 'Romain SAISS' ,imageUrl: '/assets/photosdesjoueurs/romain.webp'},
    { index: 8, title: '', text: 'Jawad EL YAMIQ' ,imageUrl: '/assets/photosdesjoueurs/jawad.webp'},
    { index: 9, title: '', text: 'Achraf DARI ' ,imageUrl: '/assets/photosdesjoueurs/achraf.jpg'},
    { index: 10, title: '', text: 'Badr BENOUN' ,imageUrl: '/assets/photosdesjoueurs/badr.jpeg'},

    // ... ajoutez d'autres données pour chaque carte
  ];
  cardsDataMidfielder = [
    { index: 1, title: ' Midfielder 1', text: 'sofyan AMRABAT ', imageUrl: '/assets/photosdesjoueurs/amrabet.jpg'},
    { index: 2, title: ' Midfielder 2', text: 'Hakim ZIYECH', imageUrl: '/assets/photosdesjoueurs/hakim.jpg'},
    { index: 3, title: ' Midfielder 3', text: 'Azzedine OUNAHI', imageUrl: '/assets/photosdesjoueurs/ounahi.jfif'},
    { index: 4, title: 'Midfielder 4', text: 'Anas ZAROURY', imageUrl: '/assets/photosdesjoueurs/anass.jpeg'},
    { index: 5, title: ' Midfielder 5', text: 'ilias CHAIR ', imageUrl: '/assets/photosdesjoueurs/ilias.webp'},
    { index: 6, title: ' Midfielder 6', text: 'Zakaria ABOUKHLAL', imageUrl: '/assets/photosdesjoueurs/zakaria.jpg'},
    { index: 7, title: ' Midfielder 7', text: 'Selim AMALLAH', imageUrl: '/assets/photosdesjoueurs/selim.jpg'},
    { index: 8, title: ' Midfielder 8', text: 'Sofiane BOUFAL', imageUrl: '/assets/photosdesjoueurs/boufal.jfif'},
    { index: 9, title: ' Midfielder 9', text: ' Bilal EL KHANNOUSS', imageUrl: '/assets/photosdesjoueurs/Bilal.jpeg'},
    // ... ajoutez d'autres données pour chaque carte de la catégorie "Midfielder"
  ];
  cardsDataForward = [
    { index: 1, title: ' ', text: 'hamdallah abderrazak ', imageUrl: '/assets/photosdesjoueurs/hamdallah.jfif'},
    { index: 2, title: ' abdelhamid sabiri', text: 'abdelhamid sabiri', imageUrl: '/assets/photosdesjoueurs/sabiri.jpg'},
    { index: 3, title: ' Midfielder 3', text: 'abdessamad ezzalzouli', imageUrl: '/assets/photosdesjoueurs/abdessamad.png'},
    { index: 4, title: 'Midfielder 4', text: 'Youssef EN NESYRI', imageUrl: '/assets/photosdesjoueurs/nesyri.jpg'},
    { index: 5, title: ' Midfielder 5', text: 'Walid CHEDDIRA ', imageUrl: '/assets/photosdesjoueurs/walid.jpg'},

    // ... ajoutez d'autres données pour chaque carte de la catégorie "Midfielder"
  ];

cardsDataManager = [
  { index: 1, title: 'Walid REGRAGUI', text: 'Description 1', imageUrl: '/assets/photosdesjoueurs/regragui.webp'},
  // ... ajoutez d'autres données pour chaque carte de la catégorie "Manager"
];


  ngOnInit(): void {
  // Récupérer l'ID de l'équipe à partir de l'URL
  const idParam = this.route.snapshot.paramMap.get('id');
  const teamId = idParam !== null ? +idParam : 0; // Default to 0 if 'id' is null

  // Charger les joueurs en fonction de l'ID de l'équipe
  this.players = this.serviceService.getPlayers(teamId);

}

}

