import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'index.html',
    renderMode: RenderMode.Client
  },
  {
    path: 'contacto/index.html',
    renderMode: RenderMode.Client
  },
  {
    path: 'galeria/index.html',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
