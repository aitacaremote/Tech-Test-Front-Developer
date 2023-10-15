import { Route } from '@angular/router';
import { EventComponent } from './event.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';

export default [
  {
    path: '',
    component: EventComponent,
    children: [
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: ':id/tickets',
        component: TicketListComponent,

      }
    ]
  },
] as Route[];