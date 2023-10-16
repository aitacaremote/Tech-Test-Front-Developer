import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, map } from 'rxjs';
import { ITicket } from 'src/app/shared/models';

@Injectable()
export class TicketService {
  constructor(private afs: AngularFirestore) {}

    /**
   * Adds a ticket to the 'tickets' collection.
   *
   * @param {ITicket} ticket - The ticket to be added.
   * @return {Observable<DocumentReference>} - An observable that resolves to the reference of the added ticket.
   */
  addTicket(ticket: ITicket) {
    return from(this.afs.collection<ITicket>('tickets').add(ticket));
  }

    /**
   * Checks if a ticket is available for a given event and user.
   *
   * @param {string} eventId - The ID of the event.
   * @param {string} userId - The ID of the user.
   * @return {Observable<boolean>} An Observable that emits a boolean indicating if a ticket is available.
   */
  isTicketAvailable(eventId: string, userId: string) {
    return from(
      this.afs
        .collection<ITicket[]>('tickets')
        .ref.where('eventId', '==', eventId)
        .get()
    ).pipe(
      map((tickets) => {
        return tickets.docs.flatMap((ticket) => ticket.data());
      }),
      map((tickets) => {
        return tickets.some((ticket) => ticket.userId === userId) &&
          tickets.length > 0;
      })
    );
  }
}
