import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFoodHeaderComponent } from './ui-food-header.component';

describe('UiFoodHeaderComponent', () => {
  let component: UiFoodHeaderComponent;
  let fixture: ComponentFixture<UiFoodHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiFoodHeaderComponent]
    });
    fixture = TestBed.createComponent(UiFoodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
