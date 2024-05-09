import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

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
