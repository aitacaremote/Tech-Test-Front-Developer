import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignUpComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export default [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
] as Route[];
