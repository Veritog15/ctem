import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/button/button.component';
@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [FooterComponent, ButtonComponent],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent { }


