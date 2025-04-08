import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', [
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private scrollService: ScrollService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menuElement = document.querySelector('.navbar ul');
    const burgerButton = document.querySelector('.burger-menu');
    
    if (this.isMenuOpen && menuElement && burgerButton) {
      const clickedInside = menuElement.contains(event.target as Node) || 
                          burgerButton.contains(event.target as Node);
      if (!clickedInside) {
        this.isMenuOpen = false;
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToComponent(sectionId);
    this.isMenuOpen = false;
  }

  toggleMenu(event: Event): void {
    event.stopPropagation(); // Empêche la propagation du clic
    this.isMenuOpen = !this.isMenuOpen;
  }
}