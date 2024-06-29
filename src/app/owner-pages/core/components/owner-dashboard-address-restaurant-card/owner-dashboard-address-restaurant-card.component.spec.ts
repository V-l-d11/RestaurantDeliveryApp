import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDashboardAddressRestaurantCardComponent } from './owner-dashboard-address-restaurant-card.component';

describe('OwnerDashboardAddressRestaurantCardComponent', () => {
  let component: OwnerDashboardAddressRestaurantCardComponent;
  let fixture: ComponentFixture<OwnerDashboardAddressRestaurantCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDashboardAddressRestaurantCardComponent]
    });
    fixture = TestBed.createComponent(OwnerDashboardAddressRestaurantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
