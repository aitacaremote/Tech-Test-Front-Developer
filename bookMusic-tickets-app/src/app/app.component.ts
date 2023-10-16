import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { BasketService } from './shared/services/basket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [AuthService, BasketService],
  template: ` <router-outlet /> `,
})
export class AppComponent {}
