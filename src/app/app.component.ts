import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  showHeader = true;
  showFooter = true;
    constructor(private router: Router) {}


     ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and hide header/footer for login route
        this.showHeader = !event.url.includes('/login')&& !event.url.includes('/dashboard');
        this.showFooter = !event.url.includes('/login')&& !event.url.includes('/dashboard');
      }
    });
  }


  title = 'angularProject';

}
