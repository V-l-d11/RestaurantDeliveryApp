import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDialogAddIngridCategoryComponent } from './owner-dialog-add-ingrid-category.component';

describe('OwnerDialogAddIngridCategoryComponent', () => {
  let component: OwnerDialogAddIngridCategoryComponent;
  let fixture: ComponentFixture<OwnerDialogAddIngridCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDialogAddIngridCategoryComponent]
    });
    fixture = TestBed.createComponent(OwnerDialogAddIngridCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
