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

  canActivate() {
    
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/p/events']);
      return false;
    } else {
      return true;
    }
  }
}
