import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ])
  ]
})
export class AProposComponent {
  @ViewChild('modalContent') modalContent!: ElementRef;
  isModalOpen = false;
  private previousActiveElement: HTMLElement | null = null;

  openModal(): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
    this.previousActiveElement = document.activeElement as HTMLElement;
    
    // Focus trap setup
    setTimeout(() => {
      this.modalContent?.nativeElement?.focus();
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = '';
    // Restore focus
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }
}