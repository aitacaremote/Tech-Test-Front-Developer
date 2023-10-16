import { Route } from '@angular/router';
import { EventComponent } from './event.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { TicketComponent } from './components/ticket/ticket.component';

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
        path: ':id',
        component: TicketComponent,

      }
    ]
  },
] as Route[];