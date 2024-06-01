import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSideNavMenuComponent } from './owner-side-nav-menu.component';

describe('OwnerSideNavMenuComponent', () => {
  let component: OwnerSideNavMenuComponent;
  let fixture: ComponentFixture<OwnerSideNavMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerSideNavMenuComponent]
    });
    fixture = TestBed.createComponent(OwnerSideNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
