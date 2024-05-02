import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketUserComponent } from './basket-user.component';

describe('BasketUserComponent', () => {
  let component: BasketUserComponent;
  let fixture: ComponentFixture<BasketUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketUserComponent]
    });
    fixture = TestBed.createComponent(BasketUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
