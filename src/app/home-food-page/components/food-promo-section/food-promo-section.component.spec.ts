import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPromoSectionComponent } from './food-promo-section.component';

describe('FoodPromoSectionComponent', () => {
  let component: FoodPromoSectionComponent;
  let fixture: ComponentFixture<FoodPromoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPromoSectionComponent]
    });
    fixture = TestBed.createComponent(FoodPromoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
