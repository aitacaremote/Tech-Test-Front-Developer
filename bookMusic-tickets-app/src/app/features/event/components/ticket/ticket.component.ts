import { Component, OnDestroy } from '@angular/core';
import { TicketService } from '../../services/tickets.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { EventsService } from '../../services/events.service';
import { BehaviorSubject, Observable, Subject, takeUntil, tap } from 'rxjs';
import { IEvent } from 'src/app/shared/models';
import { TimestampToDatePipe } from 'src/app/shared/pipes/timestamp-to-date.pipe';
import { AsyncPipe, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [TimestampToDatePipe, NgIf, AsyncPipe],
  providers: [TicketService],
  templateUrl: './ticket.component.html',
})
export class TicketComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  event$ = new BehaviorSubject<IEvent>(null);
  eventId: string;
  userId: string;
  isTicketBought$: Observable<boolean>;

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

      this.eventService.findOne(this.eventId).subscribe((event) => {
        console.log('event', event);

        this.event$.next(event);
      });
    });
    this.authSerive.currentUser$.subscribe((user) => {
      this.userId = user?.uid;
    });

    this.isTicketBought$ = this.ticketService.isTicketAvailable(this.eventId);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  buyTicket() {
    this.ticketService
      .addTicket({
        userId: this.userId,
        eventId: this.eventId,
        createdAt: new Date(),
      })
      .pipe(
        takeUntil(this.destroy$),
      ).subscribe((ticket) => {
        console.log('ticket', ticket);
          
        this.basketService.addInBasket({ ticketId: ticket.id });
      });
    this.toastr.success('Ticket bought successfully');
  }
}
