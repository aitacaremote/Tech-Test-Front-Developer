import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BasketService } from 'src/app/shared/services/basket.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, AsyncPipe, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  userData$ = this.authService.currentUser$;
  events$ = this.basketService.events$;
  
  constructor(
    private authService: AuthService,
    private basketService: BasketService
  ) {
    this.basketService
      .updateBasekt()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Signs out the user.
   *
   * @param {none} none - This function does not take any parameters.
   * @return {void} This function does not return a value.
   */
  signOut() {
    this.authService.SignOut();
  }
}
