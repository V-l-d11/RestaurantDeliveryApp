import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerIngridietnsCategoryListComponent } from './owner-ingridietns-category-list.component';

describe('OwnerIngridietnsCategoryListComponent', () => {
  let component: OwnerIngridietnsCategoryListComponent;
  let fixture: ComponentFixture<OwnerIngridietnsCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerIngridietnsCategoryListComponent]
    });
    fixture = TestBed.createComponent(OwnerIngridietnsCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
