import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEvent } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(public afs: AngularFirestore) {}

  findAll() {
    return this.afs.collection<IEvent>('events').valueChanges();
  }

  findOne(id) {
    return this.afs.collection<IEvent>('events').doc(id).valueChanges();
  }
}
