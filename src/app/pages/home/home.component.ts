import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('objetivoFade', [
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
export class HomeComponent implements OnInit, OnDestroy {
  // Eliminar variables del carrusel
  // carouselItems = [...];
  // currentSlide = 0;
  // private intervalId: any;

  currentTitle = 'Ciencia';
  titles = ['Ciencia', 'Tecnología', 'Educación Matemática'];
  private titleIntervalId: any;
  animatingTitle = false;

  currentObjetivoIndex = 0;

  prevObjetivo() {
    this.currentObjetivoIndex = (this.currentObjetivoIndex - 1 + 2) % 2;
  }

  nextObjetivo() {
    this.currentObjetivoIndex = (this.currentObjetivoIndex + 1) % 2;
  }

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.animateTitles();
  }

  ngOnDestroy() {
    if (this.titleIntervalId) {
      clearInterval(this.titleIntervalId);
    }
  }

  animateTitles() {
    let index = 0;
    this.titleIntervalId = setInterval(() => {
      this.animatingTitle = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        index = (index + 1) % this.titles.length;
        this.currentTitle = this.titles[index];
        this.animatingTitle = false;
        this.cdr.detectChanges();
      }, 600); // Tiempo de fade-out
    }, 3000);
  }

  // Métodos de navegación (puedes implementar o eliminar según necesidad)
  navigate1() { throw new Error('Method not implemented.'); }
  navigate2() { throw new Error('Method not implemented.'); }
  navigate5() { throw new Error('Method not implemented.'); }
  navigate6() { throw new Error('Method not implemented.'); }
  navigate7() { throw new Error('Method not implemented.'); }
  navigateToOther() { this.router.navigate(['register']); }
}

