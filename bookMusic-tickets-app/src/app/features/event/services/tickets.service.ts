import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, map } from 'rxjs';
import { ITicket } from 'src/app/shared/models';

@Injectable()
export class TicketService {

  constructor(private afs: AngularFirestore) {}

  addTicket(ticket: ITicket) {
    return from(this.afs.collection<ITicket>('tickets').add(ticket));
  }

  isTicketAvailable(eventId: string) {
    return from(
      this.afs
        .collection<ITicket[]>('tickets')
        .ref.where('eventId', '==', eventId)
        .get()
    ).pipe(map((tickets) => tickets.docs.length > 0));
  }
}
