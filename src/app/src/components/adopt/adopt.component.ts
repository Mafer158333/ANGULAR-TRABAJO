import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.scss',
})
export class AdoptComponent {
  pathImOne: string = 'assets/images/perro-para-adoptar-1.jpg';
  pathImgTow: string = 'assets/images/perro-para-adoptar-2.jpg';
}
