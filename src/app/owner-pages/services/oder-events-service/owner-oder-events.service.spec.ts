import { TestBed } from '@angular/core/testing';

import { OwnerOderEventsService } from './owner-oder-events.service';

describe('OwnerOderEventsService', () => {
  let service: OwnerOderEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerOderEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
