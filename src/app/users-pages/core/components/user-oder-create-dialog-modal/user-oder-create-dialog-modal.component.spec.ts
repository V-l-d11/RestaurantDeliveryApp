import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOderCreateDialogModalComponent } from './user-oder-create-dialog-modal.component';

describe('UserOderCreateDialogModalComponent', () => {
  let component: UserOderCreateDialogModalComponent;
  let fixture: ComponentFixture<UserOderCreateDialogModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOderCreateDialogModalComponent]
    });
    fixture = TestBed.createComponent(UserOderCreateDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
