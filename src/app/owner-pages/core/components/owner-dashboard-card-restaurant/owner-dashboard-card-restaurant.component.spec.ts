import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDashboardCardRestaurantComponent } from './owner-dashboard-card-restaurant.component';

describe('OwnerDashboardCardRestaurantComponent', () => {
  let component: OwnerDashboardCardRestaurantComponent;
  let fixture: ComponentFixture<OwnerDashboardCardRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDashboardCardRestaurantComponent]
    });
    fixture = TestBed.createComponent(OwnerDashboardCardRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
