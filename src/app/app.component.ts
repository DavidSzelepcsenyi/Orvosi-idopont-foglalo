import { BreakpointObserver } from '@angular/cdk/layout';
import {Component,ViewChild,} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';

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

  constructor(private observer: BreakpointObserver, public AuthService: AuthService) {}

  ngOnInit() {
  }
  toggleMenu() {
    this.sidenav.toggle();
    this.isCollapsed = false;
  }

  logout() {
    this.AuthService.logout()
      .then(() => {
        console.log('Logged out successfully');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  }
}