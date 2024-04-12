import { TestBed } from '@angular/core/testing';

import { AuthDialogModalsService } from './auth-dialog-modals.service';

describe('AuthDialogModalsService', () => {
  let service: AuthDialogModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDialogModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
