import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOdersTableComponent } from './owner-oders-table.component';

describe('OwnerOdersTableComponent', () => {
  let component: OwnerOdersTableComponent;
  let fixture: ComponentFixture<OwnerOdersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerOdersTableComponent]
    });
    fixture = TestBed.createComponent(OwnerOdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
