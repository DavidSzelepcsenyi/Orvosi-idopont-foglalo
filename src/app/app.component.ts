import { BreakpointObserver } from '@angular/cdk/layout';
import {Component,ViewChild,} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Observable, of } from 'rxjs';
import { map, catchError, take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = true;

  currentPageRoute = window.location.pathname;


  constructor(
    private observer: BreakpointObserver, 
    public AuthService: AuthService, 
    private router : Router, 
    public UserService: UserService,
  ) {}



  ngDoCheck() {
    this.currentPageRoute = window.location.pathname;
  }

  toggleMenu() {
    this.sidenav.toggle();
    this.isCollapsed = false;
  }

  logout() {
    this.AuthService.logout()
      .then(() => {
        console.log('Logged out successfully');
        this.router.navigate(['/Login']);
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  }
  doctor(): boolean{
    //tried it, didn't work
    return true;
  }
  
}