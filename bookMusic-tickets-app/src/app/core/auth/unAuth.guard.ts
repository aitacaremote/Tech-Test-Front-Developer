import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  /**
   * Determines whether the user can access a particular route.
   *
   * @return {boolean} - True if the user is logged in, false otherwise.
   */
  canActivate() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
