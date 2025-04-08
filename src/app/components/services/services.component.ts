import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Vente de matériel',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-laptop'
    },
    {
      title: 'Réparation/dépannage',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-tools'
    },
    {
      title: 'Assemblage sur mesure',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-cpu'
    },
    {
      title: 'Mise à niveau',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-arrow-up-circle'
    },
    {
      title: 'Conseil technique',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-gear'
    }
  ];

  showTarif: boolean = false;

  toggleTarif() {
    this.showTarif = !this.showTarif;
  }
}