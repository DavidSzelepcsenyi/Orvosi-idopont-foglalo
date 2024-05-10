import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private firestore: AngularFirestore) { }

  collectionName = "Appointment"

  create(appointment: Appointment) {
    return this.firestore.collection<Appointment>(this.collectionName)
      .doc(appointment.id).set(appointment.toJSON())
  }

  findAll() {
    return this.firestore.collection<Appointment>(this.collectionName).valueChanges()
  }

  findAppointmentByID(id: string) {
    return this.firestore.collection<Appointment>(this.collectionName).doc(id).valueChanges()
  }

  update(appointment: Appointment) {
    return this.firestore.collection<Appointment>(this.collectionName)
      .doc(appointment.id).set(appointment.toJSON())
  }

  delete(id: string) {
    return this.firestore.collection<Appointment>(this.collectionName).doc(id).delete()
  }
}
