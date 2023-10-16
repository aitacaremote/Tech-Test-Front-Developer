import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEvent, ITicket, Ibasket } from '../models';
import { BehaviorSubject, Observable, filter, from, map, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  userId: string;
  events$ = new BehaviorSubject<IEvent[]>([]);
  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.auth.currentUser$.subscribe((user) => {
      this.userId = user?.uid;
    });
    this.findAll().pipe(
      switchMap((baskets) => {
        return this.afs
          .collection<ITicket>('tickets')
          .ref.where(
            'id',
            'in',
            baskets.map((basket) => basket.ticketId)
          )
          .get();
      }),
      map((ticketsDoc) => {
        return ticketsDoc.docs.map((ticket) => ticket.data());
      }),
      switchMap((ticket) => {
        return this.afs
          .collection<IEvent>('events')
          .ref.where(
            'id',
            'in',
            ticket.map((ticket) => ticket.eventId)
          )
          .where('userId', 'in', this.userId)
          .get();
      }),
      map((eventsDoc) => {
        return eventsDoc.docs.map((event) => event.data());
      })
    ).subscribe((events) => {
      this.events$.next(events);
    });
  }

  findAll() {
    return this.afs.collection<Ibasket>('basket').valueChanges();
  }

  addInBasket(basket: Ibasket) {
    return from(this.afs.collection<Ibasket>('basket').add(basket));
  }
}
