import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFilterFoodRadio } from '../../store+/actions/restaurant-actions';
@Component({
  selector: 'app-restaurant-filter-section',
  templateUrl: './restaurant-filter-section.component.html',
  styleUrls: ['./restaurant-filter-section.component.scss'],
})
export class RestaurantFilterSectionComponent {
  @Output() filterSelected = new EventEmitter<string>();

  onFilterChange(value: string) {
    this.filterSelected.emit(value);
  }

  constructor(private store$: Store) {}
}
