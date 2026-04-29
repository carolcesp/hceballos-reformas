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
      imageUrl: '/images/kitchen.png',
      altText: 'luxury modern kitchen',
      gridClass: 'col-span-12 md:col-span-8 row-span-2',
      //tags: ['A-102', 'DETALLE PLANTA']
    },
    {
      id: 2,
      category: 'Interiorismo',
      title: 'Baño Reformado',
      imageUrl: '/images/bathroom.png',
      altText: 'minimalist renovated bathroom',
      gridClass: 'col-span-12 md:col-span-4 row-span-2'
    },
    {
      id: 3,
      title: 'Suelo de Parqué',
      subtitle: 'Acabado Roble Natural',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb8fj623NueRSvvDjRcWbHnOEUPkkvGTYr6ZSK_V8ItOUMXE3c5TPx5MPcrLs1pAdbk31ktTMot686Ax8k8iqfvJ9LI_5CTCYmmzUpMgFQ2Afd1dZzlOI1p7B2Ahx5RqP5OC9_63-2Gw_8j9q4Xz9WbRe36aF8vkgu5CttyIRG2Uy4JyWnTohM7uDW_T4pPsaT2kEWlQRkVfG7XS6Ar5ucDsNjq45v0OrJJkhGDT4TbKsck4pwEkitfQ1HjYYFBxkok6t-Ch5HmZ4',
      altText: 'oak parquet flooring detail',
      gridClass: 'col-span-12 md:col-span-4 row-span-1'
    },
    {
      id: 4,
      category: 'Proyecto Integral',
      title: 'Salón Diáfano',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGiAxYKaM4qKX4XCX_rgsnzz_j4-HXWhWkm5RvkB_tTre3lmapwgITiY-lvNsINJnFUw5x03vcyL5N0ty5e8iFEx-qHQvX3NpuffSeGdit7O1e-ys93fWVRwzFk00blq_GE9KERJBAiVhCYzMgxgBTMQzOArn4KrygxBHVQ9pUngIl9mB0QP2eFrQl88fi_e865iwmTp__2LlJuGrX5cYWpG9Y9a2jh-KfZ_BuAxiHsOMmBirw1wEk9dL-AUwYNQfd-miWhR1yaZg',
      altText: 'spacious open plan living room',
      gridClass: 'col-span-12 md:col-span-8 row-span-1'
    },
    {
      id: 5,
      title: 'Dormitorio Principal',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFK7_cZAjj__8p_eQCQrALDlIpFFjmtwknXxgVGMvyzNyDzx3uEBQgyaVGyDW30SpUcs4k5kzfE_rmoEPZ5epT_-G1tGNlyOfwoS3pTdHiOYxcVnOKzW2SEKoVCnukJm_nGAmNdTu3FXKUH-cHGdNSYXk-kY3WyGc6I2Osg54RVFUznMkyLMDlxnSYD_llD8TirFaj_J9qY2LBw6ZQJyinPogJaGbHog4Zzyv0vNw8UvrMGWl2m-gYmSR8KAgsny1c65rTENfSGp0',
      altText: 'luxury bedroom',
      gridClass: 'col-span-12 md:col-span-3 row-span-1'
    },
    {
      id: 6,
      title: 'Zona de Trabajo',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn2QN-IHgDhz6evoq1XZ-VvXuFE5t_7eTVyInc-ifA_i-B9QZeY5hG_FIXkD8E2Bhz9GYUuu4u3ddsqYwuF-96ecvxeCQzHg5b-fpY9XbfOUd8NLf8a62-LTd-LRDfni14_XsaqAFWaLcNvOlqObQ0EtaGx0XyuK4HuKZTPhj9OuhpnOWXNAmVC24sHBuxOD2OZpyrVJ3rwmeyiELOYC6X_q6KkA9NAC_hvUUVUikdhpc9rIpoRVspVK6dA49kWmYFszt53V6KQJw',
      altText: 'modern home office',
      gridClass: 'col-span-12 md:col-span-3 row-span-1'
    },
    {
      id: 7,
      title: 'Terraza Urbana',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCImyBEKQEgTKLwTdcUe4vKZr_5Nznxh7ox9lnDs1Oy1Agj6ZAUgLmU32c_a207hHRxPYngqbR6H-uqlUaz1UQQyNw3xfiI3EDZfD1g1IgHiJe-wIo84GsdxzAKWRzvjG4vjuc4hGxlOPwKG6gGHC8Fr31wQce9xMwwVanFS8_8ClqicfStb-PBWvpPId2BZ_JLMeZXRcS8s1aLcF8egSf51ESNRSerQ5fuhR8t-3CScR_9g1Nh_ZWEHVWlvHJw0_aIyvVCn0pMxC8',
      altText: 'contemporary outdoor terrace',
      gridClass: 'col-span-12 md:col-span-6 row-span-1'
    }
  ];
}
