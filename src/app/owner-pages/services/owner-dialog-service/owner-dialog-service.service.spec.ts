import { TestBed } from '@angular/core/testing';

import { OwnerDialogServiceService } from './owner-dialog-service.service';

describe('OwnerDialogServiceService', () => {
  let service: OwnerDialogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerDialogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
