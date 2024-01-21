import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Match } from './match/match.module';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
  matchForm!: FormGroup;

  constructor(private fb: FormBuilder, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.matchForm = this.fb.group({
      equipe1: ['', Validators.required],
      equipe2: ['', Validators.required],
      hour: ['', Validators.required],
      stadium: ['', Validators.required],
      judgment: ['', Validators.required],
    });
  }

  onSubmit(): void {
  if (this.matchForm.valid) {
    const matchData: Match = this.matchForm.value as Match;
    this.serviceService.addMatch(matchData).subscribe(
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
