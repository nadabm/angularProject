import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
     console.log('Form submitted');
    const { username, password } = this.form.value;

    this.serviceService.login(username, password)
      .subscribe((loggedIn: boolean) => {
        if (loggedIn) {
          // Check if the logged-in user is an admin or client and navigate accordingly
          if (username === 'admin') {
            this.router.navigate(['/admin/']);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          // Handle invalid credentials
          console.error('Invalid credentials');
        }
      });
  }


}
