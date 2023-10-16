import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsService } from './services/events.service';
import { TicketService } from './services/tickets.service';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [RouterOutlet],
  providers: [EventsService],
  template: ` 
  <router-outlet /> 
  `,
})
export class EventComponent {}
