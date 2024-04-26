import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsDialogModalComponent } from './food-details-dialog-modal.component';

describe('FoodDetailsDialogModalComponent', () => {
  let component: FoodDetailsDialogModalComponent;
  let fixture: ComponentFixture<FoodDetailsDialogModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodDetailsDialogModalComponent]
    });
    fixture = TestBed.createComponent(FoodDetailsDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
