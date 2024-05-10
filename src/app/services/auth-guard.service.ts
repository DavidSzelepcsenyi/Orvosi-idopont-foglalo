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
      map(user => user && this.authService.isLoggedIn),
      catchError(error => {
        console.error(error);
        return of(false);
      }),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/Login']);
        }
      })
    );
  }
}