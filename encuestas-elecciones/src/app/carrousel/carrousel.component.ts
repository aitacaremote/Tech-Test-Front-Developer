import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
ngAfterViewInit() {
  const carouselElement = document.getElementById('carouselExampleFade');
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      pause: false,
      wrap: true,
    });
  }
}
}
