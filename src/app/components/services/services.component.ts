import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Vente de matériel',
      description: 'Ordinateurs, composants et accessoires sélectionnés avec soin. Nous proposons du matériel fiable et performant, adapté à tous les besoins : bureautique, gaming ou professionnel.',
      icon: 'bi bi-laptop'
    },
    {
      title: 'Réparation/dépannage',
      description: 'Pannes logicielles ou matérielles. Nous intervenons sur les ordinateurs en cas de lenteurs, bugs, écran noir, composants défectueux ou autres soucis techniques.',
      icon: 'bi bi-tools'
    },
    {
      title: 'Assemblage sur mesure',
      description: 'Ordinateur monté selon vos besoins. Nous réalisons des configurations personnalisées selon votre utilisation (bureautique, jeux, montage, etc.) et votre budget.',
      icon: 'bi bi-cpu'
    },
    {
      title: 'Mise à niveau',
      description: 'Améliorer sans remplacer. Nous mettons à niveau votre ordinateur (ajout de RAM, SSD, carte graphique…) pour prolonger sa durée de vie.',
      icon: 'bi bi-arrow-up-circle'
    },
    {
      title: 'Conseil technique',
      description: 'Un doute ou une question ? Nous vous aidons à faire les bons choix ou à comprendre les problèmes techniques, que ce soit avant ou après achat.',
      icon: 'bi bi-gear'
    }
  ];

  showTarif: boolean = false;

  toggleTarif() {
    this.showTarif = !this.showTarif;
  }
}