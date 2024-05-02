import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOdersUsersComponent } from './my-oders-users.component';

describe('MyOdersUsersComponent', () => {
  let component: MyOdersUsersComponent;
  let fixture: ComponentFixture<MyOdersUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOdersUsersComponent]
    });
    fixture = TestBed.createComponent(MyOdersUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
