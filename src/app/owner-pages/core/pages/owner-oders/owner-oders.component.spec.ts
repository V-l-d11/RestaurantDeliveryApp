import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOdersComponent } from './owner-oders.component';

describe('OwnerOdersComponent', () => {
  let component: OwnerOdersComponent;
  let fixture: ComponentFixture<OwnerOdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerOdersComponent]
    });
    fixture = TestBed.createComponent(OwnerOdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
