import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'am1';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavOpened = false;

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
    if (this.sidenavOpened) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  closeSidenav(): void {
    this.sidenavOpened = false;
    this.sidenav.close();
  }
}
