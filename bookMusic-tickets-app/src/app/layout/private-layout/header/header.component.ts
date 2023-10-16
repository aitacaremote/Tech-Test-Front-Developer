import { Component, ViewEncapsulation } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/core/auth/auth.service';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BasketService } from 'src/app/shared/services/basket.service';
import { BehaviorSubject, mergeMap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, AsyncPipe, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  userData$ = this.authService.currentUser$;
  events$ = this.basketService.events$;
  constructor(
    private authService: AuthService,
    private basketService: BasketService,
  ) {
  }

  signOut() {
    this.authService.SignOut();
  }
}
