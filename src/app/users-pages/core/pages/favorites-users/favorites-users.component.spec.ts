import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesUsersComponent } from './favorites-users.component';

describe('FavoritesUsersComponent', () => {
  let component: FavoritesUsersComponent;
  let fixture: ComponentFixture<FavoritesUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesUsersComponent]
    });
    fixture = TestBed.createComponent(FavoritesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
