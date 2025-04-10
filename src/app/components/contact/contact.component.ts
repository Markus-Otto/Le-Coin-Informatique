import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importation du module commun pour les directives Angular
import { ScrollService } from '../../services/scroll.service'; // Importation du service de défilement
import { BtnPDirective } from '../../shared/directives/btn-p.directive'; // Importation de la directive personnalisée pour le bouton

@Component({
  selector: 'app-contact',
  imports: [BtnPDirective, CommonModule], // Ajout de la directive personnalisée et du module commun
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
