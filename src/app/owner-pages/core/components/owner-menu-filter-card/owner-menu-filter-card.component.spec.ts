import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMenuFilterCardComponent } from './owner-menu-filter-card.component';

describe('OwnerMenuFilterCardComponent', () => {
  let component: OwnerMenuFilterCardComponent;
  let fixture: ComponentFixture<OwnerMenuFilterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerMenuFilterCardComponent]
    });
    fixture = TestBed.createComponent(OwnerMenuFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
