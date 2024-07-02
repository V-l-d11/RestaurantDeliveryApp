import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDialogAskingComponent } from './owner-dialog-asking.component';

describe('OwnerDialogAskingComponent', () => {
  let component: OwnerDialogAskingComponent;
  let fixture: ComponentFixture<OwnerDialogAskingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDialogAskingComponent]
    });
    fixture = TestBed.createComponent(OwnerDialogAskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
