import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMAIL_PATTERN, USERNAME_PATTERN } from 'src/app/config/pattern.config';
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
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group(
      {
        displayName: ['', Validators.pattern(USERNAME_PATTERN)],
        email: ['', Validators.pattern(EMAIL_PATTERN)],
        password: [
          '',
          Validators.compose([
            Validators.required,
            this.passwordStrengthValidator.validatePasswordPattern,
          ]),
        ],
        confirmPassword: [
          '',
          Validators.compose([
            Validators.required,
            this.passwordStrengthValidator.validatePasswordPattern,
          ]),
        ],
      },
      { validators: this.passwordStrengthValidator.validateSamePasswords }
    );
  }

  signup() {
    if (this.signupForm.valid) {
      this.authService.SignUp(
        this.signupForm.value.email,
        this.signupForm.value.password,
        this.signupForm.value.displayName
      );
      this.toastr.success('created successfully');
      this.router.navigate(['/login']);
    } else {
      this.toastr.error('Form is not valid');
    }
  }
}
