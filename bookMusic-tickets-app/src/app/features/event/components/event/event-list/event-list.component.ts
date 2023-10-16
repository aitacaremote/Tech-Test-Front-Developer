import { Component, OnDestroy } from '@angular/core';
import { SearchEventsComponent } from '../search-events/search-events.component';
import { EventCardComponent } from '../event-card/event-card.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { EventsService } from '../../../services/events.service';
import { BehaviorSubject, Subject, map, takeUntil } from 'rxjs';
import { IEvent } from 'src/app/shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    SearchEventsComponent,
    EventCardComponent,
    MatPaginatorModule,
    NgFor,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  events$ = new BehaviorSubject<IEvent[]>([]);
  pageEvent: PageEvent;
  count = 0;
  pageSize = 4;
  pageIndex = 0;
  pageSizeOptions = [4, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  constructor(private eventService: EventsService, private router: Router) {
    this.eventService
      .findAll()
      .pipe(
        map((events) => {
          this.count = events.length;
          return events.slice(0, this.pageSize);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((events) => {
        this.events$.next(events);
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.count = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.eventService
      .findAll()
      .pipe(
        map((events) =>
          events.slice(
            e.pageSize * e.pageIndex - e.length,
            e.pageSize * e.pageIndex + e.pageSize
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((events) => {
        this.events$.next(events);
      });
  }

  handleSearch(value) {
    this.eventService
      .findAll()
      .pipe(
        map((events) =>
          events
            .filter((event) => {
              if (value.name) {
                return event.name
                  .toLowerCase()
                  .includes(value.name.toLowerCase());
              }
              if (value.venue) {
                return event.venue
                  .toLowerCase()
                  .includes(value.venue.toLowerCase());
              }
              if (value.location) {
                return event.location
                  .toLowerCase()
                  .includes(value.location.toLowerCase());
              }
              return true;
            })
            .slice(0, this.pageSize)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((events) => {
        this.events$.next(events);
      });
  }

  click(eventId) {
    this.router.navigateByUrl(`/p/events/${eventId}`);
  }
}
