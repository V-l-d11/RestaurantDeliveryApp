import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFoodH1Component } from './ui-food-h1.component';

describe('UiFoodH1Component', () => {
  let component: UiFoodH1Component;
  let fixture: ComponentFixture<UiFoodH1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiFoodH1Component]
    });
    fixture = TestBed.createComponent(UiFoodH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
