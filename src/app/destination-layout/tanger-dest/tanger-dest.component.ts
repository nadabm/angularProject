import { Component } from '@angular/core';

@Component({
  selector: 'app-tanger-dest',
  templateUrl: './tanger-dest.component.html',
  styleUrls: ['./tanger-dest.component.css']
})
export class TangerDestComponent {
  boxIds: string[] = ['box1', 'box2', 'box3'];
  selectedBoxId: string | null = null;

  selectBox(boxId: string | null) {
    this.selectedBoxId = boxId;
  }
//
// Keep track of favorites
  favoriteBoxes: Set<string> = new Set<string>();

  // Method to toggle favorite status
// Update the method to toggle favorite and change the button text
toggleFavorite(boxId: string): void {
  if (this.isFavorite(boxId)) {
    this.favoriteBoxes.delete(boxId);
  } else {
    this.favoriteBoxes.add(boxId);
  }
}


  // Method to check if a box is a favorite
  isFavorite(boxId: string): boolean {
    return this.favoriteBoxes.has(boxId);
  }



  ///
  globalCommentText: string = '';
  globalComments: string[] = [];

  submitGlobalComment() {
    if (this.globalCommentText) {
      this.globalComments.push(this.globalCommentText);
      this.globalCommentText = '';
    }
  }

}
