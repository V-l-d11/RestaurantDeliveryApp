import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemBascetComponent } from './card-item-bascet.component';

describe('CardItemBascetComponent', () => {
  let component: CardItemBascetComponent;
  let fixture: ComponentFixture<CardItemBascetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardItemBascetComponent]
    });
    fixture = TestBed.createComponent(CardItemBascetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
