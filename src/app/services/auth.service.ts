import { Injectable } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword, User, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

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