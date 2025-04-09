import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ScrollService } from './services/scroll.service';
import { ServicesComponent } from './components/services/services.component';
import { AProposComponent } from "./components/a-propos/a-propos.component";
import { ScrollRevealDirective } from '../app/shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  host: {
    'ngSkipHydration': '',
  },
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ServicesComponent,
    AProposComponent,
    ScrollRevealDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Le-Coin-Informatique';

  constructor(private scrollService: ScrollService) {}
}