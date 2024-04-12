import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouruselSliderFoodComponent } from './courusel-slider-food.component';

describe('CouruselSliderFoodComponent', () => {
  let component: CouruselSliderFoodComponent;
  let fixture: ComponentFixture<CouruselSliderFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouruselSliderFoodComponent]
    });
    fixture = TestBed.createComponent(CouruselSliderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
