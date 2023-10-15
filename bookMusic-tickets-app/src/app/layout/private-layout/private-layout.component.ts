import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavModule],
  template: ` <mat-drawer-container class="h-full w-full">
    <mat-drawer mode="side" opened class="image-layout"></mat-drawer>
    <mat-drawer-content class="absolute px-4">
      <app-header />
      <router-outlet />
    </mat-drawer-content>
  </mat-drawer-container>`,
  styleUrls: ['./private-layout.component.scss'],
})
export class PrivateLayoutComponent {}
