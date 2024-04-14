import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRestaurantsCardsSectionComponent } from './food-restaurants-cards-section.component';

describe('FoodRestaurantsCardsSectionComponent', () => {
  let component: FoodRestaurantsCardsSectionComponent;
  let fixture: ComponentFixture<FoodRestaurantsCardsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRestaurantsCardsSectionComponent]
    });
    fixture = TestBed.createComponent(FoodRestaurantsCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
