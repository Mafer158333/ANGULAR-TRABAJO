import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
})
export class SkeletonComponent {}
