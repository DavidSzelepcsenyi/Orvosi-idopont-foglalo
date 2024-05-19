import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Appointment } from '../model/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  constructor(private firestore: AngularFirestore) { }

  collectionName = "Appointment"

  create(appointment: Appointment): Promise<void> {
    return this.firestore.collection<Appointment>(this.collectionName)
      .doc(appointment.id).set(appointment.toJSON())
  }

  findAll(): Observable<Array<Appointment>> {
    return this.firestore.collection<Appointment>(this.collectionName).valueChanges()
  }

  findAppointmentByID(id: string): Observable<Array<Appointment>> {
    return this.firestore.collection<Appointment>
    (this.collectionName,  ref => ref
      .where("id", "==", id)
    )
    .valueChanges()
  }

  updateUrgency(appointment: Appointment): Promise<void> {
    return this.firestore.collection<Appointment>(this.collectionName)
      .doc(appointment.id)
      .update({ isUrgent: !appointment.isUrgent });
  }

  delete(id: string): Promise<void> {
    return this.firestore.collection<Appointment>(this.collectionName).doc(id).delete()
  }
}
