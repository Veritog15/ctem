import { Component, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent, FooterComponent, CommonModule], 
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  animations: [
    trigger('carouselFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms cubic-bezier(.4,2,.6,1)', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(.4,2,.6,1)', style({ opacity: 0, transform: 'scale(1.05)' }))
      ])
    ])
  ]
})
export class InformationComponent {
  currentSlideIndex = 0;
  totalSlides = 3;

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.totalSlides) % this.totalSlides;
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.totalSlides;
  }

  // Flipbook logic can remain if needed
}