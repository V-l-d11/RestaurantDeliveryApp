import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardFoodComponent } from './ui-card-food.component';

describe('UiCardFoodComponent', () => {
  let component: UiCardFoodComponent;
  let fixture: ComponentFixture<UiCardFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiCardFoodComponent]
    });
    fixture = TestBed.createComponent(UiCardFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
