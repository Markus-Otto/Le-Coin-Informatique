import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Fourniture globale dans l'application
})
export class ScrollService {
  // Fonction pour défiler vers une section spécifiée
  scrollToComponent(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });  // Défilement fluide
    }
  }
}
