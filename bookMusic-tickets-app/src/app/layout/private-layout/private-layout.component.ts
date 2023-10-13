import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div class="h-full w-full body">
    <app-header></app-header>
    <router-outlet />
  </div>`,
  styleUrls: ['./private-layout.component.scss'],
})
export class PrivateLayoutComponent {}
