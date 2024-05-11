import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => user ? !!user : false),
      map(loggedIn => {
        if (loggedIn) {
          const requiresDoctor = this.router.getCurrentNavigation()?.extras?.state?.['requiresDoctor'];
          if (requiresDoctor && !this.authService.isDoctor()) {
            this.router.navigate(['/Login']);
            return false;
          }
          return true;
        } else {
          return false;
        }
      })
    );
  }
}