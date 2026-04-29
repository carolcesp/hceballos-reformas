import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactInfoService } from '../../core/contact-info.service';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  readonly contact = inject(ContactInfoService);
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateMeta({
      title: 'HCeballos Reformas | Reformas Integrales en Madrid',
      description: 'Expertos en reformas integrales en Madrid. Más de 30 años transformando hogares con calidad y confianza. ¡Solicita tu presupuesto gratuito hoy!',
      keywords: 'reformas integrales madrid, empresa de reformas, presupuestos reformas, reformas baños, reformas cocinas, pintura, albañilería',
      url: 'https://www.hceballos.com/'
    });
  }
}
