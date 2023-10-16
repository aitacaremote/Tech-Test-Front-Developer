import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEvent, ITicket, Ibasket } from '../models';
import { BehaviorSubject, from, map, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  userId: string;
  events$ = new BehaviorSubject<IEvent[]>([]);
  tickets: ITicket[] = [];
  constructor(private afs: AngularFirestore, private auth: AuthService) {}

  /**
   * Retrieves all items from the 'basket' collection and returns them as an observable.
   *
   * @return {Observable<Ibasket[]>} An observable that emits an array of 'Ibasket' objects.
   */
  findAll() {
    return this.afs.collection<Ibasket>('basket').valueChanges();
  }

  /**
   * Updates the basket by retrieving all the baskets, querying for the corresponding tickets, filtering the tickets by the current user, querying for the events associated with the filtered tickets, and updating the events subject.
   *
   * @return {Observable<IEvent[]>} An observable that emits an array of events.
   */
  updateBasekt() {
    return this.findAll().pipe(
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
    );
  }

    /**
   * Adds the given item to the basket.
   *
   * @param {Ibasket} basket - The item to be added to the basket.
   * @return {Observable<any>} - An observable that emits the result of adding the item to the basket.
   */
  addInBasket(basket: Ibasket) {
    this.updateBasekt().subscribe();
    return from(this.afs.collection<Ibasket>('basket').add(basket));
  }
}
