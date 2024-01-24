import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent {
 equipeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.equipeForm = this.fb.group({
      teamName: ['', Validators.required],
      teamLogo: [''],
      teamTrainer: [''],
      playerList: ['']
    });
  }
    get players() {
    return this.equipeForm.get('players') as FormArray;
    }
    addPlayer(): void {
    this.players.push(this.fb.group({
      playerName: [''],

      playerPosition: ['']
    }));
  }

  removePlayer(index: number): void {
    this.players.removeAt(index);
  }


  onSubmit(): void {
    // Add your logic to handle form submission
    console.log(this.equipeForm.value);
    // You can send the form data to a service or perform other actions.
  }
}
