import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/seo.service';
import { RouterModule } from '@angular/router';

export interface GalleryItem {
  id: number;
  category?: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  altText: string;
  gridClass: string;
  tags?: string[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateMeta({
      title: 'Proyectos y Galería | HCeballos Reformas Madrid',
      description: 'Descubre nuestra galería de proyectos de reformas en Madrid. Cocinas, baños, salones y reformas integrales con acabados de alta calidad.',
      keywords: 'galería reformas, proyectos reformas madrid, antes y después reformas, fotos cocinas, fotos baños',
      url: 'https://www.hceballos.com/galeria'
    });
  }

  galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'Proyecto Residencial',
      title: 'Cocina Moderna',
      imageUrl: 'images/kitchen.png',
      altText: 'luxury modern kitchen',
      gridClass: 'col-span-12 md:col-span-8 row-span-2',
      //tags: ['A-102', 'DETALLE PLANTA']
    },
    {
      id: 2,
      category: 'Interiorismo',
      title: 'Baño Reformado 1',
      imageUrl: 'images/bathroom.png',
      altText: 'minimalist renovated bathroom',
      gridClass: 'col-span-12 md:col-span-4 row-span-2'
    },
    {
      id: 3,
      category: 'Interiorismo',
      title: 'Baño Reformado 2',
      imageUrl: 'images/bathroom_2.png',
      altText: 'minimalist renovated bathroom',
      gridClass: 'col-span-12 md:col-span-4 row-span-2'
    },
    {
      id: 4,
      category: 'Proyecto Residencial',
      title: 'Cocina Chalet',
      imageUrl: 'images/kitchen_2.png',
      altText: 'luxury modern kitchen',
      gridClass: 'col-span-12 md:col-span-8 row-span-2',
      //tags: ['A-102', 'DETALLE PLANTA']
    },
    {
      id: 5,
      title: 'Portal Reformado',
      imageUrl: 'images/foto_portal.png',
      altText: 'luxury bedroom',
      gridClass: 'col-span-12 md:col-span-4 row-span-2'
    },
    {
      id: 6,
      title: 'Armarios a medida',
      imageUrl: 'images/armario.png',
      altText: 'modern home office',
      gridClass: 'col-span-12 md:col-span-4 row-span-2'
    },
    {
      id: 7,
      title: 'Suelo de Parqué',
      subtitle: 'Acabado Roble Natural',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb8fj623NueRSvvDjRcWbHnOEUPkkvGTYr6ZSK_V8ItOUMXE3c5TPx5MPcrLs1pAdbk31ktTMot686Ax8k8iqfvJ9LI_5CTCYmmzUpMgFQ2Afd1dZzlOI1p7B2Ahx5RqP5OC9_63-2Gw_8j9q4Xz9WbRe36aF8vkgu5CttyIRG2Uy4JyWnTohM7uDW_T4pPsaT2kEWlQRkVfG7XS6Ar5ucDsNjq45v0OrJJkhGDT4TbKsck4pwEkitfQ1HjYYFBxkok6t-Ch5HmZ4',
      altText: 'oak parquet flooring detail',
      gridClass: 'col-span-12 md:col-span-4 row-span-2'
    },


    //pequeños
    // {
    //   id: 3,
    //   title: 'Suelo de Parqué',
    //   subtitle: 'Acabado Roble Natural',
    //   imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb8fj623NueRSvvDjRcWbHnOEUPkkvGTYr6ZSK_V8ItOUMXE3c5TPx5MPcrLs1pAdbk31ktTMot686Ax8k8iqfvJ9LI_5CTCYmmzUpMgFQ2Afd1dZzlOI1p7B2Ahx5RqP5OC9_63-2Gw_8j9q4Xz9WbRe36aF8vkgu5CttyIRG2Uy4JyWnTohM7uDW_T4pPsaT2kEWlQRkVfG7XS6Ar5ucDsNjq45v0OrJJkhGDT4TbKsck4pwEkitfQ1HjYYFBxkok6t-Ch5HmZ4',
    //   altText: 'oak parquet flooring detail',
    //   gridClass: 'col-span-12 md:col-span-4 row-span-1'
    // },
    // {
    //   id: 5,
    //   title: 'Armarios a medida',
    //   imageUrl: '/images/armario.png',
    //   altText: 'modern home office',
    //   gridClass: 'col-span-12 md:col-span-3 row-span-1'
    // },
    // {

    // {
    //   id: 7,
    //   title: 'Terraza Urbana',
    //   imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCImyBEKQEgTKLwTdcUe4vKZr_5Nznxh7ox9lnDs1Oy1Agj6ZAUgLmU32c_a207hHRxPYngqbR6H-uqlUaz1UQQyNw3xfiI3EDZfD1g1IgHiJe-wIo84GsdxzAKWRzvjG4vjuc4hGxlOPwKG6gGHC8Fr31wQce9xMwwVanFS8_8ClqicfStb-PBWvpPId2BZ_JLMeZXRcS8s1aLcF8egSf51ESNRSerQ5fuhR8t-3CScR_9g1Nh_ZWEHVWlvHJw0_aIyvVCn0pMxC8',
    //   altText: 'contemporary outdoor terrace',
    //   gridClass: 'col-span-12 md:col-span-6 row-span-1'
    // }
  ];
}
