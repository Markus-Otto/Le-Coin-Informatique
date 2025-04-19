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

  toastMessage = '';
toastType = '';

onSubmit(form: any) {
  if (form.invalid) return;

  this.mailService.sendMail(this.formData).subscribe({
    next: () => {
      this.showToast('Message envoyé avec succès !', 'success');
      form.resetForm();
    },
    error: (err) => {
      this.showToast('Une erreur est survenue. Réessayez plus tard.', 'error');
      console.error(err);
    }
  });
}

showToast(message: string, type: 'success' | 'error') {
  this.toastMessage = message;
  this.toastType = type;

  setTimeout(() => {
    this.toastMessage = '';
    this.toastType = '';
  },3000); // cache après 3 secondes
}

  
}
