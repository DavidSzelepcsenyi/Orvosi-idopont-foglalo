import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Timetable } from '../model/timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private firestore: AngularFirestore) { }

  collectionName = "Timetable"

  create(timetable : Timetable) {
    return this.firestore.collection<Timetable>(this.collectionName)
      .doc(timetable.id).set(timetable.toJSON())
  }

  findAll() {
    return this.firestore.collection<Timetable>(this.collectionName).valueChanges()
  }

  findTimetableByID(id: string) {
    return this.firestore.collection<Timetable>(this.collectionName).doc(id).valueChanges()
  }

  update(timetable: Timetable) {
    return this.firestore.collection<Timetable>(this.collectionName)
      .doc(timetable.id).set(timetable.toJSON())
  }

  delete(id: string) {
    return this.firestore.collection<Timetable>(this.collectionName).doc(id).delete()
  }
}
