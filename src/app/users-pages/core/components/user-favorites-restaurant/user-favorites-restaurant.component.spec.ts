import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoritesRestaurantComponent } from './user-favorites-restaurant.component';

describe('UserFavoritesRestaurantComponent', () => {
  let component: UserFavoritesRestaurantComponent;
  let fixture: ComponentFixture<UserFavoritesRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFavoritesRestaurantComponent]
    });
    fixture = TestBed.createComponent(UserFavoritesRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
