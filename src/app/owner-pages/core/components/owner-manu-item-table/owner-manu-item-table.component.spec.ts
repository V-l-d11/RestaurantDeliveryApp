import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManuItemTableComponent } from './owner-manu-item-table.component';

describe('OwnerManuItemTableComponent', () => {
  let component: OwnerManuItemTableComponent;
  let fixture: ComponentFixture<OwnerManuItemTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerManuItemTableComponent]
    });
    fixture = TestBed.createComponent(OwnerManuItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
