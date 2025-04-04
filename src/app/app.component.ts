import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ScrollService } from './services/scroll.service'; // Importation du service de défilement
import { ServicesComponent } from './components/services/services.component'; // Importation du composant Services

@Component({
  selector: 'app-root',
  imports: [ CommonModule, HeaderComponent, FooterComponent, AccueilComponent, ServicesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Le-Coin-Informatique';

  scrollToComponent(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
