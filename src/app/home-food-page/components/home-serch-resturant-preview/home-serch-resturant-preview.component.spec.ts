import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSerchResturantPreviewComponent } from './home-serch-resturant-preview.component';

describe('HomeSerchResturantPreviewComponent', () => {
  let component: HomeSerchResturantPreviewComponent;
  let fixture: ComponentFixture<HomeSerchResturantPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSerchResturantPreviewComponent]
    });
    fixture = TestBed.createComponent(HomeSerchResturantPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
