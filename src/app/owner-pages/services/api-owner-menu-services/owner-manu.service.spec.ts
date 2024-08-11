import { TestBed } from '@angular/core/testing';

import { OwnerManuService } from './owner-manu.service';

describe('OwnerManuService', () => {
  let service: OwnerManuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerManuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
