import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimeStatusModalComponent } from './user-time-status-modal.component';

describe('UserTimeStatusModalComponent', () => {
  let component: UserTimeStatusModalComponent;
  let fixture: ComponentFixture<UserTimeStatusModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTimeStatusModalComponent]
    });
    fixture = TestBed.createComponent(UserTimeStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
