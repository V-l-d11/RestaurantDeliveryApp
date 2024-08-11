import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddMenuItemFoodComponent } from './owner-add-menu-item-food.component';

describe('OwnerAddMenuItemFoodComponent', () => {
  let component: OwnerAddMenuItemFoodComponent;
  let fixture: ComponentFixture<OwnerAddMenuItemFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerAddMenuItemFoodComponent]
    });
    fixture = TestBed.createComponent(OwnerAddMenuItemFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
