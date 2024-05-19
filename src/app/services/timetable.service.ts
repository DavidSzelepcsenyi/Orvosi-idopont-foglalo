import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Timetable } from '../model/timetable';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private firestore: AngularFirestore) { }

  collectionName = "Timetable"

  create(timetable : Timetable): Promise<void> {
    return this.firestore.collection<Timetable>(this.collectionName)
      .doc(timetable.id).set(timetable.toJSON())
  }

  findAll(): Observable<Array<Timetable>> {
    return this.firestore.collection<Timetable>
    (this.collectionName, ref => ref
      .orderBy("id", "asc")
    )
    .valueChanges()
  }

  findTimetableByID(id: string): Observable<Array<Timetable>> {
    return this.firestore.collection<Timetable>
    (this.collectionName,  ref => ref
      .where("id", "==", id)
    )
    .valueChanges()
  }

  update(timetable: Timetable): Promise<void> {
    return this.firestore.collection<Timetable>(this.collectionName)
      .doc(timetable.id).set(timetable.toJSON())
  }

  delete(id: string): Promise<void> {
    return this.firestore.collection<Timetable>(this.collectionName).doc(id).delete()
  }
}
