import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),

      confirmPassword: new FormControl('', Validators.required),

      displayName: new FormControl('', Validators.required),
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.authService.SignUp(
        this.signupForm.value.email,

        this.signupForm.value.password
      );
    }
  }
}
