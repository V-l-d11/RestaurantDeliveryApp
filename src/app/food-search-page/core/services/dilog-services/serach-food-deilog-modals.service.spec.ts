import { TestBed } from '@angular/core/testing';

import { SerachFoodDeilogModalsService } from './serach-food-deilog-modals.service';

describe('SerachFoodDeilogModalsService', () => {
  let service: SerachFoodDeilogModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerachFoodDeilogModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
