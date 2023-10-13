import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="h-full w-full body">
      <router-outlet />
    </div>
  `,
  styleUrls: ['layout.component.scss'],
})
export class LayoutComponent {}
