import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardsIntructionComponent } from './section-cards-intruction.component';

describe('SectionCardsIntructionComponent', () => {
  let component: SectionCardsIntructionComponent;
  let fixture: ComponentFixture<SectionCardsIntructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCardsIntructionComponent]
    });
    fixture = TestBed.createComponent(SectionCardsIntructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
