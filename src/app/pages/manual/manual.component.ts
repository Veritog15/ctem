import { Component, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-manual',
  standalone: true,
  imports: [FooterComponent, CommonModule], 
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements AfterViewInit {
    ngAfterViewInit(): void {
}}