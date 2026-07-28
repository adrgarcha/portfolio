import type { MetadataRoute } from 'next';

import type { Locale } from '@/i18n/routing';
import { CASE_STRUCTURE } from '@/lib/cases';
import { esOnlyCanonical, localizedUrls } from '@/lib/seo';

const LOCALES: Locale[] = ['es', 'en'];

function localizedEntries(
   pathname: Parameters<typeof localizedUrls>[0]['pathname'],
   changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
   priority: number,
   now: Date,
): MetadataRoute.Sitemap {
   const urls = localizedUrls({ pathname });
   return LOCALES.map((locale) => ({
      url: urls[locale],
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages: { es: urls.es, en: urls.en } },
   }));
}

export default function sitemap(): MetadataRoute.Sitemap {
   const now = new Date();

   const staticRoutes: MetadataRoute.Sitemap = [
      ...localizedEntries('/', 'monthly', 1, now),
      ...localizedEntries('/servicios', 'monthly', 0.9, now),
      ...localizedEntries('/casos-de-exito', 'monthly', 0.8, now),
      ...localizedEntries('/agenda', 'monthly', 0.9, now),
      {
         url: esOnlyCanonical('/desarrollador-web-sevilla').canonical,
         lastModified: now,
         changeFrequency: 'monthly',
         priority: 0.8,
      },
   ];

   const caseRoutes: MetadataRoute.Sitemap = CASE_STRUCTURE.flatMap((c) => {
      const urls = localizedUrls({
         pathname: '/casos-de-exito/[slug]',
         params: (targetLocale) => ({ slug: c.slug[targetLocale] }),
      });
      return LOCALES.map((locale) => ({
         url: urls[locale],
         lastModified: now,
         changeFrequency: 'monthly' as const,
         priority: 0.7,
         alternates: { languages: { es: urls.es, en: urls.en } },
      }));
   });

   return [...staticRoutes, ...caseRoutes];
}
