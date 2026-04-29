import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoService } from '../../core/contact-info.service';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  readonly contact = inject(ContactInfoService);
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateMeta({
      title: 'Contacto | HCeballos Reformas en Madrid',
      description: 'Contacta con nosotros para tu proyecto de reforma. Presupuesto sin compromiso. Trabajamos en Madrid y alrededores. Teléfono, email y ubicación.',
      keywords: 'contacto reformas, presupuesto reformas madrid, teléfono reformas madrid, empresa reformas madrid',
      url: 'https://www.hceballos.com/contacto'
    });
  }
}
