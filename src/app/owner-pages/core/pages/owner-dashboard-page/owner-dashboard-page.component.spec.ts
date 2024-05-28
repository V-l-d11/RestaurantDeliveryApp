import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDashboardPageComponent } from './owner-dashboard-page.component';

describe('OwnerDashboardPageComponent', () => {
  let component: OwnerDashboardPageComponent;
  let fixture: ComponentFixture<OwnerDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDashboardPageComponent]
    });
    fixture = TestBed.createComponent(OwnerDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
