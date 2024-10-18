import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MenuModel } from '../models';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgOptimizedImage, NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  router: Router = inject(Router);
  currentUrl: string = ''; // Variable para almacenar la URL actual
  pathImg: string = 'assets/images/huella.png';
  menu: MenuModel[] = [
    {
      id: 1,
      description: 'Inicio',
      url: '',
    },
    {
      id: 2,
      description: 'Adopta',
      url: 'adopta',
    },
    {
      id: 3,
      description: 'Adoptar y Donar',
      url: '',
    },
    {
      id: 4,
      description: 'Apoyanos',
      url: 'apoyanos',
    },
    {
      id: 5,
      description: 'Hogares de perros',
      url: '',
    },
    {
      id: 6,
      description: 'Blog',
      url: '',
    },
    {
      id: 7,
      description: 'Contactanos',
      url: '',
    },
  ];

  ngOnInit(): void {
    // Suscribirse a los eventos de navegación.
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentUrl = this.router.url; // Actualiza la URL actual
      });
  }

  // Método para verificar si la ruta actual coincide con el menú
  isActive(menuItem: string): boolean {
    //Omitimos el origend e la ruta.
    if (this.currentUrl === '/') {
      return false;
    } else {
      // Asegúrate de que la comparación sea exacta
      return this.currentUrl === '/' + menuItem || this.currentUrl === menuItem;
    }
  }
}
