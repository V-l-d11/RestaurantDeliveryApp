import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRestaurantSearchListComponent } from './customer-restaurant-search-list.component';

describe('CustomerRestaurantSearchListComponent', () => {
  let component: CustomerRestaurantSearchListComponent;
  let fixture: ComponentFixture<CustomerRestaurantSearchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerRestaurantSearchListComponent]
    });
    fixture = TestBed.createComponent(CustomerRestaurantSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
