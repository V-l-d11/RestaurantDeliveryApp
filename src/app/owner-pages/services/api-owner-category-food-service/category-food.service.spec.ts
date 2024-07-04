import { TestBed } from '@angular/core/testing';

import { CategoryFoodService } from './category-food.service';

describe('CategoryFoodService', () => {
  let service: CategoryFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
