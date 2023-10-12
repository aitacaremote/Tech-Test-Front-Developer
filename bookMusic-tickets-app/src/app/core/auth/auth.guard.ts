import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  RouterStateSnapshot,
  Router,
  ActivatedRouteSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  take,
  tap,
} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (!this.authService.isLoggedIn) {
      console.log('user is not logged in');

      this.router.navigate(['/login']);

      return false;
    }

    return true;
  }
}
