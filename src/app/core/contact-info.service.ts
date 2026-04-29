import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactInfoService {
  readonly phone = '+34 627 35 55 01';
  readonly phoneTel = 'tel:+34627355501';
  readonly email = 'hceballosreformas@gmail.com';
  readonly emailMailto = `mailto:${this.email}`;
  readonly address = 'Av. de Asturias, Tetuán, 28029 Madrid';
  readonly mapsUrl = 'https://maps.app.goo.gl/G5DuHYvmVBxTRWav8';
  readonly scheduleWeekday = 'Lunes a Viernes: 09:00 - 19:00';
  readonly scheduleSaturday = 'Sábados: Con cita previa';
}
