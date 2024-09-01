import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOdersDetailsTableLineComponent } from './owner-oders-details-table-line.component';

describe('OwnerOdersDetailsTableLineComponent', () => {
  let component: OwnerOdersDetailsTableLineComponent;
  let fixture: ComponentFixture<OwnerOdersDetailsTableLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerOdersDetailsTableLineComponent]
    });
    fixture = TestBed.createComponent(OwnerOdersDetailsTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
