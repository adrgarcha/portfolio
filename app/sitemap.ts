import type { MetadataRoute } from 'next';

import { CASES } from '@/lib/cases';

const BASE = 'https://adrichavero.com';

export default function sitemap(): MetadataRoute.Sitemap {
   const now = new Date();
   const staticRoutes: MetadataRoute.Sitemap = [
      { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
      { url: `${BASE}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE}/casos-de-exito`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${BASE}/agenda`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
   ];

   const caseRoutes: MetadataRoute.Sitemap = CASES.map((c) => ({
      url: `${BASE}/casos-de-exito/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
   }));

   return [...staticRoutes, ...caseRoutes];
}
