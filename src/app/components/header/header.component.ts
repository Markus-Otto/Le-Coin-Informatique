import {Component,HostListener,AfterViewInit,OnDestroy,Inject,PLATFORM_ID,} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { BtnPDirective } from '../../shared/directives/btn-p.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BtnPDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  isMenuOpen = false;
  activeButton: string | null = null;
  private observer!: IntersectionObserver;

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const sectionIds = ['section1', 'section2', 'section3', 'section4'];
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      this.observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              this.activeButton = id;
            }
          }
        }
      }, options);

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          this.observer.observe(el);
        }
      });
    } else {
      console.warn('IntersectionObserver is not available in this environment.');
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menuElement = document.querySelector('.navbar ul');
    const burgerButton = document.querySelector('.burger-menu');

    if (this.isMenuOpen && menuElement && burgerButton) {
      const clickedInside =
        menuElement.contains(event.target as Node) ||
        burgerButton.contains(event.target as Node);
      if (!clickedInside) {
        this.isMenuOpen = false;
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToComponent(sectionId);
    this.isMenuOpen = false;
    this.activeButton = sectionId;
  }

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
