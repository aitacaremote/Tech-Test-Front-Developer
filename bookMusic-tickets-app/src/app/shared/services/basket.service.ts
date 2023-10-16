import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEvent, ITicket, Ibasket } from '../models';
import {
  BehaviorSubject,
  from,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  userId: string;
  events$ = new BehaviorSubject<IEvent[]>([]);
  tickets: ITicket[] = [];
  constructor(private afs: AngularFirestore, private auth: AuthService) {
  }

  findAll() {
    return this.afs.collection<Ibasket>('basket').valueChanges();
  }

  updateBasekt() {
    return this.findAll()
      .pipe(
        switchMap((baskets) => {
          const ticketIds = baskets.map((basket) => basket.ticketId);

          return this.afs
            .collection<ITicket>('tickets')
            .ref.where('id', 'in', ticketIds)
            .get();
        }),
        switchMap((ticketsDoc) => {
          const user = this.auth.currentUser$;
          this.tickets = ticketsDoc.docs.flatMap((ticket) => ticket.data());

          return user;
        }),
        switchMap((user) => {
          const ticketsByUser = this.tickets
            .filter((ticket) => ticket.userId === user.uid)
            .map((ticket) => ticket.eventId);
          return this.afs
            .collection<IEvent>('events')
            .ref.where('id', 'in', ticketsByUser)
            .get();
        }),
        map((eventsDoc) => {
          return eventsDoc.docs.map((event) => event.data());
        }),
        tap((events) => {
          this.events$.next(events);
        })
      )
  }

  addInBasket(basket: Ibasket) {
    this.updateBasekt().subscribe();
    return from(this.afs.collection<Ibasket>('basket').add(basket));
  }
}
