import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  statistics = [
    { label: 'Total Users', value: 100 },
    { label: 'Active Users', value: 80 },
    { label: 'Total Teams', value: 20 },
    { label: 'Matches Played', value: 50 },
  ];

  quickLinks = [
    { title: 'Manage Users', icon: 'fas fa-users', link: '/admin/users' },
    { title: 'Add Team', icon: 'fas fa-plus', link: '/admin/add-team' },
    { title: 'View Matches', icon: 'fas fa-futbol', link: '/admin/matches' },
  ];

  recentActivity = [
    { user: 'John Doe', action: 'Added a new team', timestamp: '2 hours ago' },
    { user: 'Alice Johnson', action: 'Deleted a match', timestamp: '1 day ago' },
    { user: 'Bob Smith', action: 'Updated user profile', timestamp: '3 days ago' },
  ];

  constructor() { }

  ngOnInit(): void {
    // You can add any initialization logic here
  }
}
