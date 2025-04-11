import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(data: { name: string; email: string; message: string }) {
    return this.http.post('https://picknoma.com/send_mail.php', data); 
  }
}
