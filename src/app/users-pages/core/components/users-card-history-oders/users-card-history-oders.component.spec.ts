import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCardHistoryOdersComponent } from './users-card-history-oders.component';

describe('UsersCardHistoryOdersComponent', () => {
  let component: UsersCardHistoryOdersComponent;
  let fixture: ComponentFixture<UsersCardHistoryOdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersCardHistoryOdersComponent]
    });
    fixture = TestBed.createComponent(UsersCardHistoryOdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
