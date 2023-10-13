import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router } from '@angular/router';
import { EMAIL_PATTERN } from 'src/app/config/pattern.config';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PasswordValidators } from 'src/app/core/validators/password.validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    public passwordStrengthValidator: PasswordValidators
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.pattern(EMAIL_PATTERN)),

      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          this.passwordStrengthValidator.validatePasswordPattern,
        ])
      ),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.SignIn(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
    }
  }
}
