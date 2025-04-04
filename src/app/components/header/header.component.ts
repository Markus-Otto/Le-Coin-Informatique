import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Injection du service dans le constructeur
  constructor(private scrollService: ScrollService) {}

  // Méthode appelée lors du clic sur un bouton de défilement
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToComponent(sectionId);  // Appelle la méthode du service
  }
}
