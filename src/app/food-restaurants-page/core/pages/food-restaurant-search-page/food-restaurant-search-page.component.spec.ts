import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRestaurantSearchPageComponent } from './food-restaurant-search-page.component';

describe('FoodRestaurantSearchPageComponent', () => {
  let component: FoodRestaurantSearchPageComponent;
  let fixture: ComponentFixture<FoodRestaurantSearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRestaurantSearchPageComponent]
    });
    fixture = TestBed.createComponent(FoodRestaurantSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
