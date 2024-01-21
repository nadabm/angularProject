import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbarAd.component.html',
  styleUrls: ['./navbarAd.component.css']
})
export class NavbarAdComponent {
  // Add any logic or variables as needed
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
