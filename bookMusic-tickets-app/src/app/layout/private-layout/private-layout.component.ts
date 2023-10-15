import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavModule],
  template: ` <div class="h-full w-full grid grid-cols-1 lg:grid-cols-3">
    <!-- <mat-drawer mode="side" opened class="image-layout md:col-span-1"></mat-drawer> -->
    <div mode="side" opened class="image-layout lg:h-full h-[200px] col-span-1"></div>
    <div class="px-4 col-span-1 lg:col-span-2">
      <app-header class="hidden lg:block" />
      <router-outlet/>
    </div>
  </div>`,
  styleUrls: ['./private-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrivateLayoutComponent {}
