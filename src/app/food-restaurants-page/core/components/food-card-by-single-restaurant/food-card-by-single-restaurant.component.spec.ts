import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCardBySingleRestaurantComponent } from './food-card-by-single-restaurant.component';

describe('FoodCardBySingleRestaurantComponent', () => {
  let component: FoodCardBySingleRestaurantComponent;
  let fixture: ComponentFixture<FoodCardBySingleRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCardBySingleRestaurantComponent]
    });
    fixture = TestBed.createComponent(FoodCardBySingleRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
