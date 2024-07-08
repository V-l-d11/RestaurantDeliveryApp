import { TestBed } from '@angular/core/testing';

import { OwnerIngridientsService } from './owner-ingridients.service';

describe('OwnerIngridientsService', () => {
  let service: OwnerIngridientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerIngridientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
