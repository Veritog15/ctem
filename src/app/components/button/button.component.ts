import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  navigate() {
    window.location.href = 'https://app.ctem.ec';
  }
  
}
