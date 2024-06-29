import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDashboardContactRetaurantCardComponent } from './owner-dashboard-contact-retaurant-card.component';

describe('OwnerDashboardContactRetaurantCardComponent', () => {
  let component: OwnerDashboardContactRetaurantCardComponent;
  let fixture: ComponentFixture<OwnerDashboardContactRetaurantCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDashboardContactRetaurantCardComponent]
    });
    fixture = TestBed.createComponent(OwnerDashboardContactRetaurantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
