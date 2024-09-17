import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerEventsPageComponent } from './owner-events-page.component';

describe('OwnerEventsPageComponent', () => {
  let component: OwnerEventsPageComponent;
  let fixture: ComponentFixture<OwnerEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerEventsPageComponent]
    });
    fixture = TestBed.createComponent(OwnerEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
