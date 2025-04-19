import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPDirective } from '../../shared/directives/btn-p.directive';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [CommonModule, BtnPDirective],
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent {
  isModalOpen = false;
  faqItems: FaqItem[] = [
    {
      question: 'Quels types de PC proposez-vous ?',
      answer: 'Nous proposons une large gamme de PC, PC Gamer haute performance personnaliser, PC de bureau pour un usage professionnel, et PC portables adaptés à tous les besoins et budgets.',
      isOpen: false
    },
    {
      question: 'Proposez-vous un service de réparation ?',
      answer: 'Oui, nous offrons un service complet de diagnostique et réparation (si réalisable) pour tous types d\'ordinateurs.',
      isOpen: false
    },
    {
      question: 'Quelle est la durée de garantie ?',
      answer: 'La plus part de nos PC portable neufs sont garantis 3 ans. Les autres garantis 2 ans. Les reconditionnés sont garantis 6 mois.',
      isOpen: false
    },
    {
      question: 'Proposez-vous des facilités de paiement ?',
      answer: 'Oui, nous proposons plusieurs options de paiement, y compris le paiement en plusieurs fois. N\'hésitez pas à nous consulter pour connaître toutes les modalités disponibles.',
      isOpen: false
    },
    {
      question: 'Vendez-vous des accessoires ?',
      answer: 'Oui, nous proposons aussi des accessoires pour PC, y compris des claviers, souris, casques et autres périphériques.',
      isOpen: false
    },
  ];

  constructor(private elementRef: ElementRef) {}

  openModal(): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
    this.faqItems = this.faqItems.map(item => ({...item, isOpen: false}));
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }

  toggleFaq(index: number): void {
    this.faqItems = this.faqItems.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    }));
  }

  @HostListener('window:keydown.escape')
  handleEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }
}