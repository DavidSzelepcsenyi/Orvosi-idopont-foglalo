import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: AngularFirestore, 
    private authService: AuthService
  ) { }

  

  collectionName = "Users"

  create(user: User): Promise<void> {
    return this.firestore.collection<User>(this.collectionName)
      .doc(user.id).set(user.toJSON())
  }

  findAll(): Observable<Array<User>> {
    return this.firestore.collection<User>(this.collectionName).valueChanges()
  }

  findUserByID(id: string): Observable<Array<User>> {
    return this.firestore.collection<User>
    (this.collectionName,  ref => ref
      .where("id", "==", id)

    )
    .valueChanges()
  }

  update(user: User): Promise<void> {
    return this.firestore.collection<User>(this.collectionName)
      .doc(user.id).set(user.toJSON())
  }

  delete(id: string): Promise<void> {
    return this.firestore.collection<User>(this.collectionName).doc(id).delete()
  }
  
}

