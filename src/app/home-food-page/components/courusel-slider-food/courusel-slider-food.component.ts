import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';

@Component({
  selector: 'app-courusel-slider-food',
  templateUrl: './courusel-slider-food.component.html',
  styleUrls: ['./courusel-slider-food.component.scss'],
})
export class CouruselSliderFoodComponent implements OnInit {
  @Input()
  categories!: Observable<Category[]>;

  slides: { name: string; img: string }[] = [];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  ngOnInit(): void {
    this.categories
      .pipe(
        map((categories) =>
          categories.map((category, index) => ({
            name: category.name,
            img: this.getImageForCategory(index),
          }))
        )
      )
      .subscribe((slidesWithImages) => {
        this.slides = slidesWithImages;
        console.log(this.slides, 'Thissliders');
      });
  }

  getImageForCategory(index: number): string {
    const images = [
      '/assets/images/imgSlider1.png',
      '/assets/images/imgSlider2.png',
      '/assets/images/imgSlider3.png',
      '/assets/images/imgSlider4.png',
    ];

    return images[index % images.length];
  }
}
