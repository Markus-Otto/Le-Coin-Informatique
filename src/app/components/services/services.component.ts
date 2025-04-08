import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importation du module commun pour les directives Angular
import { ScrollService } from '../../services/scroll.service'; // Importation du service de défilement

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
      icon: 'bi bi-laptop'  // Utilisation d'une icône Bootstrap
    },
    {
      title: 'Réparation/dépannage',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-tools'  // Utilisation d'une icône Bootstrap
    },
    {
      title: 'Assemblage sur mesure',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-cpu'  // Utilisation d'une icône Bootstrap
    },
    {
      title: 'Mise à niveau',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-arrow-up-circle'  // Utilisation d'une icône Bootstrap
    },
    {
      title: 'Conseil technique',
      description: 'enim enim id voluptatum reiciendis et repudiandae exercitation',
      icon: 'bi bi-gear'  // Utilisation d'une icône Bootstrap
    }
  ];

  showTarif: boolean = false;

  toggleTarif() {
    this.showTarif = !this.showTarif;
  }

}
