import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerEditOderModalComponent } from './owner-edit-oder-modal.component';

describe('OwnerEditOderModalComponent', () => {
  let component: OwnerEditOderModalComponent;
  let fixture: ComponentFixture<OwnerEditOderModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerEditOderModalComponent]
    });
    fixture = TestBed.createComponent(OwnerEditOderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
