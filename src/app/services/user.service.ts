import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) { }

  

  collectionName = "Users"

  create(user: User) {
    return this.firestore.collection<User>(this.collectionName)
      .doc(user.id).set(user.toJSON())
  }

  findAll() {
    return this.firestore.collection<User>(this.collectionName).valueChanges()
  }

  findUserByID(id: string) {
    return this.firestore.collection<User>(this.collectionName).doc(id).valueChanges()
  }

  update(user: User) {
    return this.firestore.collection<User>(this.collectionName)
      .doc(user.id).set(user.toJSON())
  }

  delete(id: string) {
    return this.firestore.collection<User>(this.collectionName).doc(id).delete()
  }
}
