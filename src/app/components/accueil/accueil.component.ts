import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPDirective } from '../../shared/directives/btn-p.directive';
import { ScrollService } from '../../services/scroll.service';
import { SeoService } from '../../services/seo-service.service'; 

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, BtnPDirective],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(
    private scrollService: ScrollService,
    private seo: SeoService
  ) {
    this.seo.updateMeta(
      'Le Coin Inform@tique',
      'Bienvenue sur Le Coin Inform@tique, votre partenaire informatique pour la création de sites, dépannage et plus.'
    );
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToComponent(sectionId);
  }
}
