import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  carouselItems = [
    {
      image: 'assets/research.svg',
      title: 'Nuestro Equipo de Investigación',
      description: 'Detrás de ANI hay un grupo de investigadores apasionados por la educación y la tecnología. Nuestro equipo está conformado por expertos en metodologías de aprendizaje, análisis de datos y tecnologías emergentes, quienes han trabajado arduamente en el diseño y validación de esta innovadora herramienta.'
    },
    {
      image: 'assets/development.svg',
      title: 'Nuestro Equipo de Desarrollo',
      description: 'Para materializar esta visión, contamos con un equipo de desarrolladores altamente calificados en el diseño y construcción de soluciones tecnológicas. Ellos han implementado una plataforma intuitiva y eficiente que permite a docentes y estudiantes interactuar de manera dinámica.'
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    console.log('Next slide clicked, currentSlide:', this.currentSlide);
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
    this.cdr.detectChanges(); // Force change detection
  }

  prevSlide() {
    console.log('Previous slide clicked, currentSlide:', this.currentSlide);
    this.currentSlide = (this.currentSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
    this.cdr.detectChanges(); // Force change detection
  }

  getTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  navigate1() {
    throw new Error('Method not implemented.');
  }
  navigate2() {
    throw new Error('Method not implemented.');
  }
  navigate5() {
    throw new Error('Method not implemented.');
  }
  navigate6() {
    throw new Error('Method not implemented.');
  }
  navigate7() {
    throw new Error('Method not implemented.');
  }

  navigateToOther() {
    this.router.navigate(['register']);
  }
}