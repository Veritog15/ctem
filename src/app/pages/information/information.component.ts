import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent, FooterComponent],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'] 
})
export class InformationComponent { }
