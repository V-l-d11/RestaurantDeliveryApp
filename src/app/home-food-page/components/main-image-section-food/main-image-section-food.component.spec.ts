import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageSectionFoodComponent } from './main-image-section-food.component';

describe('MainImageSectionFoodComponent', () => {
  let component: MainImageSectionFoodComponent;
  let fixture: ComponentFixture<MainImageSectionFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainImageSectionFoodComponent]
    });
    fixture = TestBed.createComponent(MainImageSectionFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
