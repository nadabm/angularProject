import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idee-de-voyage',
  templateUrl: './idee-de-voyage.component.html',
  styleUrls: ['./idee-de-voyage.component.css']
})
export class IdeeDeVoyageComponent  implements OnInit{
    idee_voyage! :Array<any>;
  constructor() {

  }




  ngOnInit():void{
    this.idee_voyage=[
      {id:1,name:"Marrakech",prix:1200},
      {id:2,name:"Tanger",prix:1200},
      {id:3,name:"Agadir",prix:1200},
    ]

  }
}
