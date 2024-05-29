import { TestBed } from '@angular/core/testing';

import { OwnerOdersService } from './owner-oders.service';

describe('OwnerOdersService', () => {
  let service: OwnerOdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerOdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
