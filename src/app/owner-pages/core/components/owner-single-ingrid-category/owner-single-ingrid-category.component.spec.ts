import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSingleIngridCategoryComponent } from './owner-single-ingrid-category.component';

describe('OwnerSingleIngridCategoryComponent', () => {
  let component: OwnerSingleIngridCategoryComponent;
  let fixture: ComponentFixture<OwnerSingleIngridCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSingleIngridCategoryComponent]
    });
    fixture = TestBed.createComponent(OwnerSingleIngridCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
