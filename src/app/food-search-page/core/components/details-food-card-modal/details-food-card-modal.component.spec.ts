import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFoodCardModalComponent } from './details-food-card-modal.component';

describe('DetailsFoodCardModalComponent', () => {
  let component: DetailsFoodCardModalComponent;
  let fixture: ComponentFixture<DetailsFoodCardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsFoodCardModalComponent]
    });
    fixture = TestBed.createComponent(DetailsFoodCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
