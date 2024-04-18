import { Component } from '@angular/core';

@Component({
  selector: 'app-food-carusel-popelar-cuisin',
  templateUrl: './food-carusel-popelar-cuisin.component.html',
  styleUrls: ['./food-carusel-popelar-cuisin.component.scss'],
})
export class FoodCaruselPopelarCuisinComponent {
  slides = [
    { img: '/assets/images/imgSlider1.png' },
    { img: '/assets/images/imgSlider2.png' },
    { img: '/assets/images/imgSlider3.png' },
    { img: '/assets/images/imgSlider4.png' },
  ];

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
}
