import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDialogCrateCategoryFoodComponent } from './owner-dialog-crate-category-food.component';

describe('OwnerDialogCrateCategoryFoodComponent', () => {
  let component: OwnerDialogCrateCategoryFoodComponent;
  let fixture: ComponentFixture<OwnerDialogCrateCategoryFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDialogCrateCategoryFoodComponent]
    });
    fixture = TestBed.createComponent(OwnerDialogCrateCategoryFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
