import { Component } from '@angular/core';
import { Client } from './client/client.module';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  clients: Client[] = [];

  constructor(private serviceService: ServiceService) {} // Use proper naming conventions

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.serviceService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
  }
    editClient(client: Client): void {
    // Implement edit functionality using this.clientService.updateClient(client._id, updatedClient);
  }

  deleteClient(client: Client): void {
    // Implement delete functionality using this.clientService.deleteClient(client._id)
  }

}
