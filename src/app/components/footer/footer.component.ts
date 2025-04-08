// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importation du module commun pour les directives Angular
import { ScrollService } from '../../services/scroll.service'; // Importation du service de défilement
import { BtnPDirective } from '../../shared/directives/btn-p.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, BtnPDirective], // Ajout du module commun pour les directives Angular
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
