import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { User } from './client/client.module';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  users: User[] = [];
  seedUsers: User[] = [
    { id: '1', nom: 'John', prenom: 'Doe', email: 'h.doe@example.com', password: '' },
    { id: '2', nom: 'amine', prenom: 'Alice', email: 'a.doe@example.com', password: '' },
    { id: '3', nom: 'simo', prenom: 'Doe', email: 'b.doe@example.com', password: '' },
    { id: '4', nom: 'nada', prenom: 'nada', email: 'a.doe@example.com', password: '' },
    { id: '5', nom: 'nouha', prenom: 'Doe', email: 'a.doe@example.com', password: '' },
    { id: '6', nom: 'Jane', prenom: 'Smith', email: 'a.smith@example.com', password: '' },
    { id: '7', nom: 'Alice', prenom: 'Johnson', email: 'h.johnson@example.com', password: '' },
    { id: '8', nom: 'admin', prenom: 'admin', email: 'admin', password: '' },
    { id: '9', nom: 'client', prenom: 'client', email: 'client', password: '' },
    // Add more users as needed
  ];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.users.push(...this.seedUsers);
  }
deleteUser(id: string): void {
  console.log(`Attempting to delete user with id: ${id}`);

  // Handle deletion from seedUsers
  this.seedUsers = this.seedUsers.filter(user => user.id !== id);

  // Update this.users to reflect the changes
  this.users = this.users.filter(user => user.id !== id);

  // Call the service to delete the user from the backend
  this.serviceService.deleteUser(id)
    .subscribe(() => {
      // No need to call getAllUsers; the local arrays are already updated
    });
}



  getAllUsers(): void {
    this.serviceService.getAllUsers()
      .pipe(
        catchError((error) => {
          console.error('Error fetching clients:', error);
          return [];
        })
      )
      .subscribe(users => this.users = users);
  }

  // Other methods...
}
