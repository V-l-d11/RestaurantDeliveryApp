import { TestBed } from '@angular/core/testing';

import { UsersPanelApiService } from './users-panel-api.service';

describe('UsersPanelApiService', () => {
  let service: UsersPanelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPanelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
