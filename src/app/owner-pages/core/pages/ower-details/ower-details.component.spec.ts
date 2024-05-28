import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwerDetailsComponent } from './ower-details.component';

describe('OwerDetailsComponent', () => {
  let component: OwerDetailsComponent;
  let fixture: ComponentFixture<OwerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwerDetailsComponent]
    });
    fixture = TestBed.createComponent(OwerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
