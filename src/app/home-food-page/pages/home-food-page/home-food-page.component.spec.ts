import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFoodPageComponent } from './home-food-page.component';

describe('HomeFoodPageComponent', () => {
  let component: HomeFoodPageComponent;
  let fixture: ComponentFixture<HomeFoodPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFoodPageComponent]
    });
    fixture = TestBed.createComponent(HomeFoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
