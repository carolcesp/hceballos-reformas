import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';
import { GalleryComponent } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index.html', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'contacto/index.html', component: ContactComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'galeria/index.html', component: GalleryComponent }
];
