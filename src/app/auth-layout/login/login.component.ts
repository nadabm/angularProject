import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formregister: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formregister = this.fb.group({
      totp: ['', Validators.required],
      passwordFormControl: ['', Validators.required]
    });
  }
}
