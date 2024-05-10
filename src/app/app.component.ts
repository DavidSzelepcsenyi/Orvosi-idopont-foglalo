import { BreakpointObserver } from '@angular/cdk/layout';
import {Component,ViewChild,} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
  }
  toggleMenu() {

    this.sidenav.toggle();
    this.isCollapsed = false; // On mobile, the menu can never be collapsed

  }
}