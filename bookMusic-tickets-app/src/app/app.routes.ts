import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AuthGuard } from './core/auth/auth.guard';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { UnAuthGuard } from './core/auth/unAuth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/authentication/authentication.routes'),
      },
    ],
  },
  {
    path: 'p',
    component: PrivateLayoutComponent,
    canActivate: [UnAuthGuard],
    children: [
      {
        path: 'events',
        loadChildren: () => import('./features/event/event.routes'),
      },
    ],
  },
];
