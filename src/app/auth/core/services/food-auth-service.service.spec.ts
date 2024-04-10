import { TestBed } from '@angular/core/testing';

import { FoodAuthServiceService } from './food-auth-service.service';

describe('FoodAuthServiceService', () => {
  let service: FoodAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
