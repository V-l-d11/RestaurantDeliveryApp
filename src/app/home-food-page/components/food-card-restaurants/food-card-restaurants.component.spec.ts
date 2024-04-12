import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCardRestaurantsComponent } from './food-card-restaurants.component';

describe('FoodCardRestaurantsComponent', () => {
  let component: FoodCardRestaurantsComponent;
  let fixture: ComponentFixture<FoodCardRestaurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCardRestaurantsComponent]
    });
    fixture = TestBed.createComponent(FoodCardRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
