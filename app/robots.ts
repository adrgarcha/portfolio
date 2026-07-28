import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         disallow: [
            '/aviso-legal',
            '/politica-de-privacidad',
            '/politica-de-cookies',
            '/en/legal-notice',
            '/en/privacy-policy',
            '/en/cookie-policy',
            '/api/',
         ],
      },
      sitemap: 'https://adrichavero.com/sitemap.xml',
   };
}
