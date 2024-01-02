import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  // email: string = '';
  // password: string = '';

  // constructor(private http: HttpClient) {}

  // login() {
  //   const credentials = { email: this.email, password: this.password };

  //   this.http.post('http://your-backend-api/login', credentials)
  //     .subscribe(response => {
  //       // Handle successful login, e.g., store token, redirect, etc.
  //       console.log('Login successful', response);
  //     }, error => {
  //       // Handle login error, e.g., show error message
  //       console.error('Login failed', error);
  //     });
  // }
}

