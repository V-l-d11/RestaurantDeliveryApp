import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMenuSinglCardComponent } from './owner-menu-singl-card.component';

describe('OwnerMenuSinglCardComponent', () => {
  let component: OwnerMenuSinglCardComponent;
  let fixture: ComponentFixture<OwnerMenuSinglCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerMenuSinglCardComponent]
    });
    fixture = TestBed.createComponent(OwnerMenuSinglCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
