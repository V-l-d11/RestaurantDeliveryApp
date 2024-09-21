import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

@Component({
  selector: 'app-customer-restaurant-search-list',
  templateUrl: './customer-restaurant-search-list.component.html',
  styleUrls: ['./customer-restaurant-search-list.component.scss'],
})
export class CustomerRestaurantSearchListComponent {
  @Input()
  restaurantsFilters$!: Observable<RestaurantCustomer[]>;
}
