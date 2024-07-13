import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDialogAddIngridientItemComponent } from './owner-dialog-add-ingridient-item.component';

describe('OwnerDialogAddIngridientItemComponent', () => {
  let component: OwnerDialogAddIngridientItemComponent;
  let fixture: ComponentFixture<OwnerDialogAddIngridientItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDialogAddIngridientItemComponent]
    });
    fixture = TestBed.createComponent(OwnerDialogAddIngridientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
