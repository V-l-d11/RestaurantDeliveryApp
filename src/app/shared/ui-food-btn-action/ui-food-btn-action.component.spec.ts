import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFoodBtnActionComponent } from './ui-food-btn-action.component';

describe('UiFoodBtnActionComponent', () => {
  let component: UiFoodBtnActionComponent;
  let fixture: ComponentFixture<UiFoodBtnActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiFoodBtnActionComponent]
    });
    fixture = TestBed.createComponent(UiFoodBtnActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
