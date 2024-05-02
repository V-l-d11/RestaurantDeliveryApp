import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSideBarComponent } from './users-side-bar.component';

describe('UsersSideBarComponent', () => {
  let component: UsersSideBarComponent;
  let fixture: ComponentFixture<UsersSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSideBarComponent]
    });
    fixture = TestBed.createComponent(UsersSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
