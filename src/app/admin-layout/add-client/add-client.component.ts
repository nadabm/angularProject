import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { User } from './client/client.module';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  users: User[] = [];

  constructor(private serviceService: ServiceService) {} // Use proper naming conventions

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.serviceService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }


}
