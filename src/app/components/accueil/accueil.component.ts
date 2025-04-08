import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service'; // Importation du service de défilement
import { CommonModule } from '@angular/common'; // Importation du module commun pour les directives Angular
import { BtnPDirective } from '../../shared/directives/btn-p.directive'; // Importation de la directive personnalisée

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [BtnPDirective, CommonModule], // Ajout de la directive personnalisée et du module commun
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
