import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';
import { Match } from './match/match.module';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
 matchForm!: FormGroup;
matches: any;

  constructor(private fb: FormBuilder, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.matchForm = this.fb.group({
      equipe1: ['', Validators.required],
      equipe2: ['', Validators.required],
      dateTime: ['', Validators.required],
      stade: ['', Validators.required],
      statut: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.matchForm.valid) {
      const matchData: Match = this.matchForm.value as Match;
      this.serviceService.createMatch(matchData).subscribe(
        (response: any) => {
          console.log('Match added successfully:', response);
          // Optionally, you can redirect or perform additional actions after successful submission.
        },
        (error: any) => {
          console.error('Error adding match:', error);
          // Handle error scenarios, e.g., show an error message to the user.
        }
      );
    } else {
      // Handle form validation errors, if any.
    }
  }
}
