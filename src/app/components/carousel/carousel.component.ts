import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule]
})
export class CarouselComponent {
  slides = [
    {
      image: 'assets/debate-educacion.jpg',
      title: 'Debate Académico',
      text: 'Participa en debates estructurados y mejora tus habilidades.'
    },
    {
      image: 'assets/grafos.png',
      title: 'Visualización de Grafos',
      text: 'Analiza las interacciones y argumentos mediante grafos.'
    },
    {
      image: 'assets/ANI.png',
      title: 'Aplicación Móvil',
      text: 'Accede desde tu teléfono y graba tus argumentos fácilmente.'
    }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
