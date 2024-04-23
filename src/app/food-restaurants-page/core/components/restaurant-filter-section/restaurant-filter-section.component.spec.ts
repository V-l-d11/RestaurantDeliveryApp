import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFilterSectionComponent } from './restaurant-filter-section.component';

describe('RestaurantFilterSectionComponent', () => {
  let component: RestaurantFilterSectionComponent;
  let fixture: ComponentFixture<RestaurantFilterSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantFilterSectionComponent]
    });
    fixture = TestBed.createComponent(RestaurantFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
