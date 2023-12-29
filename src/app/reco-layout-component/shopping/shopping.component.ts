import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  boxIds: string[] = ['box1', 'box2', 'box3'];
  selectedBoxId: string | null = null;

  selectBox(boxId: string | null) {
    this.selectedBoxId = boxId;
  }


}
