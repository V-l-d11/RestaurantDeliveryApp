import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSingleRestaurantPageComponent } from './food-single-restaurant-page.component';

describe('FoodSingleRestaurantPageComponent', () => {
  let component: FoodSingleRestaurantPageComponent;
  let fixture: ComponentFixture<FoodSingleRestaurantPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodSingleRestaurantPageComponent]
    });
    fixture = TestBed.createComponent(FoodSingleRestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
