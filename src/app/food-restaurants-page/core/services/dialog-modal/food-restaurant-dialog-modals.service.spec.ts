import { TestBed } from '@angular/core/testing';

import { FoodRestaurantDialogModalsService } from './food-restaurant-dialog-modals.service';

describe('FoodRestaurantDialogModalsService', () => {
  let service: FoodRestaurantDialogModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodRestaurantDialogModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
