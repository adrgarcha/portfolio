import { getPathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { LINKEDIN_URL } from '@/lib/constants';
import type { Case } from '@/lib/types';

const BASE = 'https://adrichavero.com';

interface JsonLdProps {
   data: Record<string, unknown>;
}

export function professionalServiceSchema(
   locale: Locale,
   name: string,
   description: string,
   knowsAbout: string[],
): Record<string, unknown> {
   return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name,
      description,
      url: BASE,
      image: `${BASE}/opengraph-image.jpg`,
      ...(locale === 'es'
         ? { areaServed: [{ '@type': 'City', name: 'Sevilla' }, { '@type': 'AdministrativeArea', name: 'Andalucía' }] }
         : { availableLanguage: ['es', 'en'] }),
      sameAs: [LINKEDIN_URL],
      knowsAbout,
      provider: { '@type': 'Person', name: 'Adri Chavero' },
      founder: { '@type': 'Person', name: 'Adri Chavero' },
   };
}

export function caseArticleSchema(item: Case, locale: Locale): Record<string, unknown> {
   const mainEntityOfPage = `${BASE}${getPathname({
      locale,
      href: { pathname: '/casos-de-exito/[slug]', params: { slug: item.slug[locale] } },
   })}`;

   return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: item.title,
      description: item.metaDescription || item.result,
      author: { '@type': 'Person', name: 'Adri Chavero' },
      publisher: { '@type': 'Person', name: 'Adri Chavero' },
      ...(item.img ? { image: `${BASE}${item.img}` } : {}),
      mainEntityOfPage,
      inLanguage: locale,
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
