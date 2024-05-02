import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsUsersComponent } from './discounts-users.component';

describe('DiscountsUsersComponent', () => {
  let component: DiscountsUsersComponent;
  let fixture: ComponentFixture<DiscountsUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountsUsersComponent]
    });
    fixture = TestBed.createComponent(DiscountsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
