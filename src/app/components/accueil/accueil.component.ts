import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service'; // Importation du service de défilement
import { CommonModule } from '@angular/common'; // Importation du module commun pour les directives Angular

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  // Injection du service dans le constructeur
  constructor(private scrollService: ScrollService) {}

  // Méthode appelée lors du clic sur un bouton de défilement
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToComponent(sectionId);  // Appelle la méthode du service
  }
}
