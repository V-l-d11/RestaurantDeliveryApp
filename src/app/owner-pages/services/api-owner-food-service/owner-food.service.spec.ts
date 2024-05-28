import { TestBed } from '@angular/core/testing';

import { OwnerFoodService } from './owner-food.service';

describe('OwnerFoodService', () => {
  let service: OwnerFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
