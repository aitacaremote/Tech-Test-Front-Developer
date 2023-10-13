import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { EMAIL_PATTERN } from 'src/app/config/pattern.config';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  templateUrl: './reset-password.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    NgIf
  ],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl('', Validators.pattern(EMAIL_PATTERN)),
    });
  }

  sendResetLink() {
    if (this.resetForm.valid) {
      this.authService.ForgotPassword(this.resetForm.value.email);
    }
  }
}
