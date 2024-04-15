import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAuthRegisterDialogComponent } from './food-auth-register-dialog.component';

describe('FoodAuthRegisterDialogComponent', () => {
  let component: FoodAuthRegisterDialogComponent;
  let fixture: ComponentFixture<FoodAuthRegisterDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodAuthRegisterDialogComponent]
    });
    fixture = TestBed.createComponent(FoodAuthRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
