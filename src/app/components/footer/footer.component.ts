import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(private router: Router) {}

  navigate1() {
    this.router.navigate(['home']);
  }

  navigate2() {
    this.router.navigate(['information']);
  }

  navigate3() {
    this.router.navigate(['register']);
  }

  navigate4() {
    this.router.navigate(['information']);
  }

  navigate5() {
    this.router.navigate(['information']);
  }

  navigate6() {
    this.router.navigate(['information']);
  }

  navigate7() {
    this.router.navigate(['information']);
  }

}
