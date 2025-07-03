import { Component, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent, FooterComponent, CommonModule],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const carousel = document.getElementById('carousel');
    let index = 0;

    if (carousel) {
      setInterval(() => {
        index = (index + 1) % 3;
        carousel.style.transform = `translateX(-${index * 33.33}%)`; // Move by 1/3 of the total width
      }, 3000);
    }
  }
}