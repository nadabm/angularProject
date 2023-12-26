import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{
  tickets! :Array<any>;
  ngOnInit():void{
    this.tickets=[
      {id:1,name:"Marrakech",prix:1200},
      {id:2,name:"Tanger",prix:1200},
      {id:3,name:"Agadir",prix:1200},
    ]
  }
constructor() {

}
}



