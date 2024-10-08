import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';

@Component({
  selector: 'app-food-carusel-popelar-cuisin',
  templateUrl: './food-carusel-popelar-cuisin.component.html',
  styleUrls: ['./food-carusel-popelar-cuisin.component.scss'],
})
export class FoodCaruselPopelarCuisinComponent {
  @Input()
  categories$!: Observable<Category[]>;
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  images: string[] = [
    'sentiment_satisfied_alt',
    'attach_money',
    ' local_drink',
    'gesture',
    'bubble_chart',
    'music_note',
    'local_bar',
    'local_library',
  ];

  scrollLeft() {
    this.slider.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
}
