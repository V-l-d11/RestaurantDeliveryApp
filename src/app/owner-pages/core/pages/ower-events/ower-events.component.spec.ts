import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwerEventsComponent } from './ower-events.component';

describe('OwerEventsComponent', () => {
  let component: OwerEventsComponent;
  let fixture: ComponentFixture<OwerEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwerEventsComponent]
    });
    fixture = TestBed.createComponent(OwerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
