import { Injectable } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword, User, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private auth: Auth) {
    this.user$ = this.afAuth.authState.pipe(
      map(user => user)
    );
  }

  login(email : string, password : string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  register(email : string, password : string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  logout(): Promise<void> {
    return signOut(this.auth)
  }

  get isLoggedIn(): boolean {
    return this.auth.currentUser !== null
  }
}