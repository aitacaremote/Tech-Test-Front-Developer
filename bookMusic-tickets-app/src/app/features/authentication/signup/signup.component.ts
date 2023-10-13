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
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMAIL_PATTERN } from 'src/app/config/pattern.config';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PasswordValidators } from 'src/app/core/validators/password.validators';

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

  constructor(
    private authService: AuthService,
    public passwordStrengthValidator: PasswordValidators,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.pattern(EMAIL_PATTERN)),

      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          this.passwordStrengthValidator.validatePasswordPattern,
        ])
      ),

      confirmPassword: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          this.passwordStrengthValidator.validatePasswordPattern,
        ])
      ),
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.authService.SignUp(
        this.signupForm.value.email,

        this.signupForm.value.password
      );
    } else {
      this.toastr.error('Form is not valid');
    }
  }
}