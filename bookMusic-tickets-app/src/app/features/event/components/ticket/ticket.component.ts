import { Component, OnDestroy } from '@angular/core';
import { TicketService } from '../../services/tickets.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { EventsService } from '../../services/events.service';
import {
  BehaviorSubject,
  Observable,
  Subject,
  filter,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { IEvent } from 'src/app/shared/models';
import { TimestampToDatePipe } from 'src/app/shared/pipes/timestamp-to-date.pipe';
import { AsyncPipe, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/shared/services/basket.service';
import { v4 as uuidv4 } from 'uuid';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [TimestampToDatePipe, NgIf, AsyncPipe, MatCardModule],
  providers: [TicketService],
  templateUrl: './ticket.component.html',
})
export class TicketComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  event$: Observable<IEvent>;
  eventId: string;
  userId: string;
  isTicketBought$ = new BehaviorSubject<boolean>(false);

  constructor(
    private ticketService: TicketService,
    private authSerive: AuthService,
    private route: ActivatedRoute,
    private eventService: EventsService,
    private toastr: ToastrService,
    private basketService: BasketService
  ) {
    this.route.params.subscribe((params) => {
      this.eventId = params['id'];

      this.event$ = this.eventService.findOne(this.eventId);
    });
    this.authSerive.currentUser$
      .pipe(
        filter((user) => !!user),
        tap((user) => {
          this.userId = user.uid;
        }),
        switchMap((user) =>
          this.ticketService.isTicketAvailable(this.eventId, user.uid)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((isTicketBought) => {
        this.isTicketBought$.next(isTicketBought);
      });

    this.ticketService
      .isTicketAvailable(this.eventId, this.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((isTicketAvailable) => {
        this.isTicketBought$.next(isTicketAvailable);
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Buys a ticket.
   */
  buyTicket() {
    const ticketId: string = uuidv4();
    this.ticketService.addTicket({
      id: ticketId,
      userId: this.userId,
      eventId: this.eventId,
      createdAt: new Date(),
    });
    this.ticketService
      .isTicketAvailable(this.eventId, this.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((isTicketAvailable) => {
        this.isTicketBought$.next(isTicketAvailable);
      });
    this.basketService.addInBasket({ id: uuidv4(), ticketId: ticketId });
    this.toastr.success('Ticket bought successfully');
  }
}
