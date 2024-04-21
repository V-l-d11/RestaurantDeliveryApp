import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRestaurantCardComponent } from './ui-restaurant-card.component';

describe('UiRestaurantCardComponent', () => {
  let component: UiRestaurantCardComponent;
  let fixture: ComponentFixture<UiRestaurantCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiRestaurantCardComponent]
    });
    fixture = TestBed.createComponent(UiRestaurantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
