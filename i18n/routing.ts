import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
   locales: ['es', 'en'],
   defaultLocale: 'es',
   localePrefix: 'as-needed',
   localeDetection: false,
   pathnames: {
      '/': '/',
      '/servicios': { es: '/servicios', en: '/services' },
      '/casos-de-exito': { es: '/casos-de-exito', en: '/case-studies' },
      '/casos-de-exito/[slug]': { es: '/casos-de-exito/[slug]', en: '/case-studies/[slug]' },
      '/agenda': { es: '/agenda', en: '/booking' },
      '/desarrollador-web-sevilla': '/desarrollador-web-sevilla',
      '/aviso-legal': { es: '/aviso-legal', en: '/legal-notice' },
      '/politica-de-privacidad': { es: '/politica-de-privacidad', en: '/privacy-policy' },
      '/politica-de-cookies': { es: '/politica-de-cookies', en: '/cookie-policy' },
   },
});

export type Locale = (typeof routing.locales)[number];
