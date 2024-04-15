import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSearchPageComponent } from './food-search-page.component';

describe('FoodSearchPageComponent', () => {
  let component: FoodSearchPageComponent;
  let fixture: ComponentFixture<FoodSearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodSearchPageComponent]
    });
    fixture = TestBed.createComponent(FoodSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
