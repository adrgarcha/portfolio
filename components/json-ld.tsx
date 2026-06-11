import { LINKEDIN_URL } from '@/lib/constants';
import type { Case } from '@/lib/types';

const BASE = 'https://adrichavero.com';

interface JsonLdProps {
   data: Record<string, unknown>;
}

export const professionalServiceSchema: Record<string, unknown> = {
   '@context': 'https://schema.org',
   '@type': 'ProfessionalService',
   name: 'Adri Chavero — Desarrollo de software a medida',
   description:
      'Desarrollador web freelance en Sevilla especializado en software a medida: aplicaciones web y móviles, integraciones y mantenimiento.',
   url: BASE,
   image: `${BASE}/opengraph-image.jpg`,
   areaServed: [
      { '@type': 'City', name: 'Sevilla' },
      { '@type': 'AdministrativeArea', name: 'Andalucía' },
   ],
   sameAs: [LINKEDIN_URL],
   knowsAbout: [
      'Desarrollo de software a medida',
      'Aplicaciones web',
      'Aplicaciones móviles',
      'Integraciones de sistemas',
      'Verifactu',
   ],
   provider: { '@type': 'Person', name: 'Adri Chavero' },
   founder: { '@type': 'Person', name: 'Adri Chavero' },
};

export function caseArticleSchema(item: Case): Record<string, unknown> {
   return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: item.title,
      description: item.metaDescription || item.result,
      author: { '@type': 'Person', name: 'Adri Chavero' },
      publisher: { '@type': 'Person', name: 'Adri Chavero' },
      ...(item.img ? { image: `${BASE}${item.img}` } : {}),
      mainEntityOfPage: `${BASE}/casos-de-exito/${item.slug}`,
   };
}

export default function JsonLd({ data }: JsonLdProps) {
   return (
      <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
      />
   );
}
