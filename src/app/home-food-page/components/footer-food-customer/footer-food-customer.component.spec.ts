import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFoodCustomerComponent } from './footer-food-customer.component';

describe('FooterFoodCustomerComponent', () => {
  let component: FooterFoodCustomerComponent;
  let fixture: ComponentFixture<FooterFoodCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterFoodCustomerComponent]
    });
    fixture = TestBed.createComponent(FooterFoodCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
