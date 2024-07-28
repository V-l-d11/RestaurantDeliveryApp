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
    { path: '/foodapp/owner/dashboardOwner', label: 'Dashboard' },
    { path: '/foodapp/owner/foodCategory', label: 'Category' },
    { path: '/foodapp/owner/ingridients', label: 'Ingridients' },
    { path: '/foodapp/owner/menu', label: 'Menu' },
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
