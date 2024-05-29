import { TestBed } from '@angular/core/testing';

import { OwnerRestaurantService } from './owner-restaurant.service';

describe('OwnerRestaurantService', () => {
  let service: OwnerRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
