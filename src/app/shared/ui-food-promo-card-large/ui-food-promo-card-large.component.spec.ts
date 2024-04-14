import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFoodPromoCardLargeComponent } from './ui-food-promo-card-large.component';

describe('UiFoodPromoCardLargeComponent', () => {
  let component: UiFoodPromoCardLargeComponent;
  let fixture: ComponentFixture<UiFoodPromoCardLargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiFoodPromoCardLargeComponent]
    });
    fixture = TestBed.createComponent(UiFoodPromoCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
