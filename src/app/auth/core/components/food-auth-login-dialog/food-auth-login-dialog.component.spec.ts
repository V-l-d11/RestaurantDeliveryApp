import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAuthLoginDialogComponent } from './food-auth-login-dialog.component';

describe('FoodAuthLoginDialogComponent', () => {
  let component: FoodAuthLoginDialogComponent;
  let fixture: ComponentFixture<FoodAuthLoginDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodAuthLoginDialogComponent]
    });
    fixture = TestBed.createComponent(FoodAuthLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
