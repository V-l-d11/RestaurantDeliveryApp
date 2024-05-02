import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesUsersComponent } from './addresses-users.component';

describe('AddressesUsersComponent', () => {
  let component: AddressesUsersComponent;
  let fixture: ComponentFixture<AddressesUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressesUsersComponent]
    });
    fixture = TestBed.createComponent(AddressesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
