import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-serch-resturant-preview',
  templateUrl: './home-serch-resturant-preview.component.html',
  styleUrls: ['./home-serch-resturant-preview.component.scss'],
})
export class HomeSerchResturantPreviewComponent {
  city!: string;
  constructor(private router: Router) {}

  redirectToRestaurantSearch() {
    if (this.city && this.city.length >= 3) {
      this.router.navigate(['/foodapp/RestaurantSearch'], {
        queryParams: { city: this.city },
      });
    }
  }
}
