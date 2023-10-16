import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavModule],
  template: ` <div class="h-full w-full grid grid-cols-1 lg:grid-cols-3">
    <div mode="side" opened class="image-layout lg:h-full h-[200px] col-span-1"></div>
    <div class="px-4 col-span-1 lg:col-span-2">
      <app-header class="lg:block" />
      <router-outlet/>
    </div>
  </div>`,
  styleUrls: ['./private-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [BasketService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutComponent {}
