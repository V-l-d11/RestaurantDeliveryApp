import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFoodLargeH1Component } from './ui-food-large-h1.component';

describe('UiFoodLargeH1Component', () => {
  let component: UiFoodLargeH1Component;
  let fixture: ComponentFixture<UiFoodLargeH1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiFoodLargeH1Component]
    });
    fixture = TestBed.createComponent(UiFoodLargeH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
