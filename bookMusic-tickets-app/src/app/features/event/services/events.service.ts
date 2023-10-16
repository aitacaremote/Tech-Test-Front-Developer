import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEvent } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(public afs: AngularFirestore) {}

  /**
   * Retrieves all events from the collection.
   *
   * @return {Observable<IEvent[]>} An observable that emits an array of events.
   */
  findAll() {
    return this.afs.collection<IEvent>('events').valueChanges();
  }

  /**
   * Finds and returns a single event with the specified ID.
   *
   * @param {string} id - The ID of the event to find.
   * @return {Observable<IEvent>} - An Observable that emits the event with the specified ID.
   */
  findOne(id) {
    return this.afs.collection<IEvent>('events').doc(id).valueChanges();
  }
}
