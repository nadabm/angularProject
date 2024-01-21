import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
// email: string = '';
//   password: string = '';
//   confirmPassword: string = '';

//   constructor(private http: HttpClient) {}

//   signup() {
//     if (this.password !== this.confirmPassword) {
//       // Handle password mismatch, e.g., show error message
//       console.error('Password and Confirm Password do not match');
//       return;
//     }

//     const credentials = { email: this.email, password: this.password };

//     this.http.post('http://your-backend-api/register', credentials)
//       .subscribe(response => {
//         // Handle successful registration, e.g., show success message
//         console.log('Registration successful', response);
//       }, error => {
//         // Handle registration error, e.g., show error message
//         console.error('Registration failed', error);
//       });
//   }

}
