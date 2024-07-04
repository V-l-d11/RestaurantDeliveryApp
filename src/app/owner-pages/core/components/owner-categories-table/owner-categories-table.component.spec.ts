import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCategoriesTableComponent } from './owner-categories-table.component';

describe('OwnerCategoriesTableComponent', () => {
  let component: OwnerCategoriesTableComponent;
  let fixture: ComponentFixture<OwnerCategoriesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerCategoriesTableComponent]
    });
    fixture = TestBed.createComponent(OwnerCategoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
