import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFoodCategoryComponent } from './owner-food-category.component';

describe('OwnerFoodCategoryComponent', () => {
  let component: OwnerFoodCategoryComponent;
  let fixture: ComponentFixture<OwnerFoodCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerFoodCategoryComponent]
    });
    fixture = TestBed.createComponent(OwnerFoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
