import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {

  clientForm: FormGroup;
  clients: any[] = []; // Assuming you have a clients array

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
      // Add more form controls as needed
    });
  }

  addClient() {
    if (this.clientForm.valid) {
      const newClient = this.clientForm.value;
      // Add logic to save new client to the database or update the clients array
      this.clients.push(newClient);
      // Clear the form after adding the client
      this.clientForm.reset();
    }
  }
}
