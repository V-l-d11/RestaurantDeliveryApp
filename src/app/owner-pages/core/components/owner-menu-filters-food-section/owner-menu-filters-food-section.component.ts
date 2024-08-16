import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

@Component({
  selector: 'app-owner-menu-filters-food-section',
  templateUrl: './owner-menu-filters-food-section.component.html',
  styleUrls: ['./owner-menu-filters-food-section.component.scss'],
})
export class OwnerMenuFiltersFoodSectionComponent {
  @Input()
  foodArr!: Observable<OwnerFoodBase[]>;
}
