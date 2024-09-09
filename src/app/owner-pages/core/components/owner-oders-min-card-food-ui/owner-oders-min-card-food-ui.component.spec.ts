import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOdersMinCardFoodUiComponent } from './owner-oders-min-card-food-ui.component';

describe('OwnerOdersMinCardFoodUiComponent', () => {
  let component: OwnerOdersMinCardFoodUiComponent;
  let fixture: ComponentFixture<OwnerOdersMinCardFoodUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerOdersMinCardFoodUiComponent]
    });
    fixture = TestBed.createComponent(OwnerOdersMinCardFoodUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
