import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {
  }

  openPage(page: 'linkedin' | 'github') {
    if (page === 'linkedin') {
      window.open('https://ch.linkedin.com/in/edon-malushaj-923a6a261/', '_blank');
    } else {
      window.open('https://github.com/donqemal', '_blank');
    }
  }

  sendMail() {
    let url = "https://formspree.io/f/xnnayoze";

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `
      Name=${this.name}&
      Email=${this.email}&
      Nachricht=${this.message}`;

    this.http.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: () => {
      }
    })
  }

  areFieldsFilled() {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    return isEmailValid && this.name.length > 0 && this.message.length > 0;
  }
}
