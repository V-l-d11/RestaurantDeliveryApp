import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-side-nav-menu',
  templateUrl: './owner-side-nav-menu.component.html',
  styleUrls: ['./owner-side-nav-menu.component.scss'],
})
export class OwnerSideNavMenuComponent {
  activateRoute: string = '';

  routes = [
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'category', label: 'Category' },
    { path: 'ingridients', label: 'Ingridients' },
    { path: 'orders', label: 'Orders' },
    { path: 'statistics', label: 'Statistics' },
    { path: 'events', label: 'Events' },
  ];

  constructor(private router: Router) {}

  setActivateRoute(route: string) {
    this.activateRoute = route;
    this.router.navigate([route]);
  }

  linkNaviagate(path: string): void {
    this.router.navigate([path]);
  }
}
