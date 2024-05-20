import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressesListComponent } from './user-addresses-list.component';

describe('UserAddressesListComponent', () => {
  let component: UserAddressesListComponent;
  let fixture: ComponentFixture<UserAddressesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddressesListComponent]
    });
    fixture = TestBed.createComponent(UserAddressesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
