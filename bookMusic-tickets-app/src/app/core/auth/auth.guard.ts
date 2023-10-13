import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (
      !this.authService.isLoggedIn &&
      !this.authService.userData.emailVerified
    ) {
      this.router.navigate(['/login']);
      return false;
    }

    this.router.navigate(['ticket-list']);
    return true;
  }
}
