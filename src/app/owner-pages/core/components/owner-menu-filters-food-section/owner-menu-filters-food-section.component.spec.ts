import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMenuFiltersFoodSectionComponent } from './owner-menu-filters-food-section.component';

describe('OwnerMenuFiltersFoodSectionComponent', () => {
  let component: OwnerMenuFiltersFoodSectionComponent;
  let fixture: ComponentFixture<OwnerMenuFiltersFoodSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerMenuFiltersFoodSectionComponent]
    });
    fixture = TestBed.createComponent(OwnerMenuFiltersFoodSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
