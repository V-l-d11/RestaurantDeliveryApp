import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerUpdateDashboardInfoComponent } from './owner-update-dashboard-info.component';

describe('OwnerUpdateDashboardInfoComponent', () => {
  let component: OwnerUpdateDashboardInfoComponent;
  let fixture: ComponentFixture<OwnerUpdateDashboardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerUpdateDashboardInfoComponent]
    });
    fixture = TestBed.createComponent(OwnerUpdateDashboardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
