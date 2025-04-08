import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config'; // Assure-toi que ce fichier existe et exporte bien `appConfig`

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header></app-header>
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig?.providers || []),
    provideAnimations()
  ]
}).catch(err => console.error(err));
