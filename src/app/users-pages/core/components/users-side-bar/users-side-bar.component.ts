import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDialogService } from '../../services/dialog-modals/user-dialog.service';

@Component({
  selector: 'app-users-side-bar',
  templateUrl: './users-side-bar.component.html',
  styleUrls: ['./users-side-bar.component.scss'],
})
export class UsersSideBarComponent {
  constructor(
    private router: Router,
    private modalService: UserDialogService
  ) {}

  openOdersUser() {
    this.router.navigate(['/foodapp/userDashboard/oders']);
  }

  openFavoritesUser() {
    this.router.navigate(['/foodapp/userDashboard/favorites']);
  }

  openBasketUser() {
    this.router.navigate(['/foodapp/userDashboard/bascet']);
  }

  logout() {
    this.modalService.logoutModal();
  }
}
