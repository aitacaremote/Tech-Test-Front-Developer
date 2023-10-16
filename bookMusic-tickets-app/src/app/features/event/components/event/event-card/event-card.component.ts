import { AsyncPipe, SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IEvent } from 'src/app/shared/models';
import { TimestampToDatePipe } from 'src/app/shared/pipes';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    AsyncPipe,
    TimestampToDatePipe,
    SlicePipe,
    MatDividerModule,
  ],
  styles: [
    `
      .mat-mdc-card-avatar {
        width: 60px !important;
      }

      .mat-mdc-card {
        height: 100%;
      }

      .mat-divider {
        margin-top: 20px;
      }
    `,
  ],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event!: IEvent;

  constructor(private router: Router) {}

  click() {
    this.router.navigateByUrl(`/p/events/${this.event.id}`);
  }
}
