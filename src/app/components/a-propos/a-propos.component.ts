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
      answer: 'Nous proposons une large gamme de PC : PC Gamer haute performance, PC de bureau pour un usage professionnel, et PC portables adaptés à tous les besoins et budgets.',
      isOpen: false
    },
    {
      question: 'Proposez-vous un service de réparation ?',
      answer: 'Oui, nous offrons un service complet de réparation pour tous types d\'ordinateurs. Notre équipe de techniciens qualifiés peut diagnostiquer et réparer la plupart des problèmes matériels et logiciels.',
      isOpen: false
    },
    {
      question: 'Quelle est la durée de garantie ?',
      answer: 'Tous nos PC neufs sont garantis 2 ans pièces et main d\'œuvre. Nous proposons également des extensions de garantie pour une plus grande tranquillité d\'esprit.',
      isOpen: false
    },
    {
      question: 'Faites-vous du conseil personnalisé ?',
      answer: 'Absolument ! Nous prenons le temps d\'écouter vos besoins et votre budget pour vous recommander la solution la plus adaptée. Notre expertise nous permet de vous guider vers le meilleur choix.',
      isOpen: false
    },
    {
      question: 'Proposez-vous des facilités de paiement ?',
      answer: 'Oui, nous proposons plusieurs options de paiement, y compris le paiement en plusieurs fois. N\'hésitez pas à nous consulter pour connaître toutes les modalités disponibles.',
      isOpen: false
    }
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