import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerIngridientsPageComponent } from './owner-ingridients-page.component';

describe('OwnerIngridientsPageComponent', () => {
  let component: OwnerIngridientsPageComponent;
  let fixture: ComponentFixture<OwnerIngridientsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerIngridientsPageComponent]
    });
    fixture = TestBed.createComponent(OwnerIngridientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
