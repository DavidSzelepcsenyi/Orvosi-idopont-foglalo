import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Doctor } from '../model/doctor';
import { Timetable } from '../model/timetable';

@Injectable({
  providedIn: 'root'
})
export class DocInfService {

  constructor(private firestore: AngularFirestore) { }

  collectionName = "DocInf"

  create(doctor : Doctor) {
    return this.firestore.collection<Doctor>(this.collectionName)
      .doc(doctor.id).set(doctor.toJSON())
  }

  findAll() {
    return this.firestore.collection<Doctor>(this.collectionName).valueChanges()
  }

  findDoctorByID(id: string) {
    return this.firestore.collection<Doctor>(this.collectionName).doc(id).valueChanges()
  }

  update(doctor : Doctor, tmtbl : Timetable, roomnumer : string) {
    return this.firestore.collection<Doctor>(this.collectionName)
      .doc(doctor.id)
      .update({timetable: tmtbl, room: roomnumer})
  }

  delete(id: string) {
    return this.firestore.collection<Doctor>(this.collectionName).doc(id).delete()
  }
}
