import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentModalComponent } from './user-payment-modal.component';

describe('UserPaymentModalComponent', () => {
  let component: UserPaymentModalComponent;
  let fixture: ComponentFixture<UserPaymentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPaymentModalComponent]
    });
    fixture = TestBed.createComponent(UserPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
