import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  /**
   * Determines if the user can activate the current route.
   *
   * @return {boolean} Returns true if the user can activate the route, false otherwise.
   */
  canActivate() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/p/events']);
      return false;
    } else {
      return true;
    }
  }
}
