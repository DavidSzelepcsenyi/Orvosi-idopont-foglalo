import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from "@angular/fire/compat/firestore"
import { Doctor } from '../model/doctor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocInfService {

  constructor(private firestore: AngularFirestore) { }

  collectionName = "DocInf"

  create(doctor : Doctor): Promise<void> {
    return this.firestore.collection<Doctor>(this.collectionName)
      .doc(doctor.id).set(doctor.toJSON())
  }

  findAll(): Observable<Array<Doctor>> {
    return this.firestore.collection<Doctor>
    (this.collectionName, ref => ref
      .orderBy("lastName", "asc")
    )
    .valueChanges()
  }

  findDoctorByID(id: string): Observable<Array<Doctor>> {
    return this.firestore.collection<Doctor>
    (this.collectionName, ref => ref
      .where("id", "==", id))
    .valueChanges()
  }

  update(doctor : Doctor, tmtbl : string, roomnumer : string): Promise<void> {
    return this.firestore.collection<Doctor>(this.collectionName)
      .doc(doctor.id)
      .update({ttable: tmtbl, room: roomnumer})
  }

  delete(id: string): Promise<void> {
    return this.firestore.collection<Doctor>(this.collectionName).doc(id).delete()
  }

}
