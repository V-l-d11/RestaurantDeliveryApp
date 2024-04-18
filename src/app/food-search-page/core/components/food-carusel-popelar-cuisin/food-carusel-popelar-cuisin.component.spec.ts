import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCaruselPopelarCuisinComponent } from './food-carusel-popelar-cuisin.component';

describe('FoodCaruselPopelarCuisinComponent', () => {
  let component: FoodCaruselPopelarCuisinComponent;
  let fixture: ComponentFixture<FoodCaruselPopelarCuisinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCaruselPopelarCuisinComponent]
    });
    fixture = TestBed.createComponent(FoodCaruselPopelarCuisinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
