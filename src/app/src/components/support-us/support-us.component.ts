import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ImageModel } from './models';

@Component({
  selector: 'app-support-us',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './support-us.component.html',
  styleUrl: './support-us.component.scss',
})
export class SupportUsComponent {
  pathImg: string = 'assets/images/tres-perros.jpg';
  images: ImageModel[] = [
    {
      id: 1,
      name: 'image-1',
      url: 'assets/images/image-3.jpeg',
    },
    {
      id: 2,
      name: 'image-2',
      url: 'assets/images/image-3.jpeg',
    },
    {
      id: 3,
      name: 'image-3',
      url: 'assets/images/image-2.jpeg',
    },
  ];
}
