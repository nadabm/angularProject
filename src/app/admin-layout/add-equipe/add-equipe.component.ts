import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent {
  equipeForm: FormGroup;

  // Inject the service in the constructor
  constructor(private fb: FormBuilder, private serviceService: ServiceService) {
    this.equipeForm = this.fb.group({
      teamName: ['', Validators.required],
      teamLogo: [''],
      teamTrainer: [''],
      playerList: ['']
    });
  }

  addEquipe(): void {
    const equipeData = this.equipeForm.value;

    // Manually add the new equipe to the seed data
    const newEquipe = { ...equipeData };
    this.serviceService.equipes.push(newEquipe);

    // Optional: Clear the form or perform any other necessary actions

    console.log('Equipe added successfully:', newEquipe);
  }
}
