import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/destination-layout/destination/destination.module';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent implements OnInit {
addNewDestination() {
throw new Error('Method not implemented.');
}
  destinations: Destination[] = [];
newDestination: any;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.destinations = [...this.seedDestinations];
  }

  addDestination(newDestination: Destination): void {
    // Update the local array without making an API call
    this.destinations.push(newDestination);
  }

  updateDestination(updatedDestination: Destination): void {
    // Find the index of the destination in the array
    const index = this.destinations.findIndex(dest => dest.id === updatedDestination.id);

    // Update the destination in the local array
    if (index !== -1) {
      this.destinations[index] = updatedDestination;
    }
  }

  deleteDestination(id: string): void {
    // Update the local array without making an API call
    this.destinations = this.destinations.filter(dest => dest.id !== id);
  }

  // Seed data for initial destinations
  private seedDestinations: Destination[] = [
    { id: '1', title: 'Beach Paradise', description: 'Beautiful beach with white sand', photo: 'beach.jpg' },
    { id: '2', title: 'Mountain Retreat', description: 'Peaceful mountain getaway', photo: 'mountain.jpg' },
    { id: '3', title: 'City Explorer', description: 'Explore the vibrant city life', photo: 'city.jpg' },
  ];
}
