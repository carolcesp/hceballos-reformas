import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoService } from '../../core/contact-info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  public contact = inject(ContactInfoService);

  async share() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'HCeballos Reformas',
          text: 'Reformas Integrales en Madrid. Calidad y confianza.',
          url: window.location.origin
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = encodeURIComponent(window.location.origin);
      const text = encodeURIComponent('HCeballos Reformas - Reformas Integrales en Madrid');
      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    }
  }
}
