import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoService } from '../../core/contact-info.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  readonly contact = inject(ContactInfoService);
}
