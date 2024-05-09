import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-side-bar',
  templateUrl: './users-side-bar.component.html',
  styleUrls: ['./users-side-bar.component.scss'],
})
export class UsersSideBarComponent {
  constructor(private router: Router) {}

  openOdersUser() {
    console.log('Router Oder');
    this.router.navigate(['/foodapp/userDashboard/oders']);
  }
}
