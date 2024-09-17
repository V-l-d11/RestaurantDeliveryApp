import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAnalitictsPageComponent } from './owner-analiticts-page.component';

describe('OwnerAnalitictsPageComponent', () => {
  let component: OwnerAnalitictsPageComponent;
  let fixture: ComponentFixture<OwnerAnalitictsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerAnalitictsPageComponent]
    });
    fixture = TestBed.createComponent(OwnerAnalitictsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
