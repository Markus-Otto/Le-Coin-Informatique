import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import essentiel pour ngModel
import { ScrollService } from '../../services/scroll.service';
import { BtnPDirective } from '../../shared/directives/btn-p.directive';
import { MailService } from '../../services/mail.service'; // Assure-toi que le chemin est bon

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, BtnPDirective], // Ajout de FormsModule ici
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private mailService: MailService) {} 

  onSubmit(event: Event) {
    event.preventDefault();
    this.mailService.sendMail(this.formData).subscribe({
      next: () => alert('Message envoyé avec succès !'),
      error: (err) => {
        alert('Une erreur est survenue.');
        console.error(err);
      }
    });
  }
}
