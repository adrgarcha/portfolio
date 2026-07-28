import type { Brand, FooterColumn, MainNavLink, Testimonial } from './types';

export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com/adrichavero/30min';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/adrichavero';

export const NAV_LINKS: MainNavLink[] = [
   { key: 'home', href: '/' },
   { key: 'services', href: '/servicios' },
   { key: 'cases', href: '/casos-de-exito' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
   {
      key: 'navigation',
      links: [
         { key: 'home', href: '/' },
         { key: 'services', href: '/servicios' },
         { key: 'cases', href: '/casos-de-exito' },
         { key: 'sevilla', href: '/desarrollador-web-sevilla' },
         { key: 'booking', href: '/agenda' },
      ],
   },
   {
      key: 'services',
      links: [
         { key: 'web', href: '/servicios#web' },
         { key: 'integrations', href: '/servicios#integraciones' },
         { key: 'mobile', href: '/servicios#movil' },
         { key: 'maintenance', href: '/servicios#mantenimiento' },
      ],
   },
   {
      key: 'legal',
      links: [
         { key: 'notice', href: '/aviso-legal' },
         { key: 'privacy', href: '/politica-de-privacidad' },
         { key: 'cookies', href: '/politica-de-cookies' },
      ],
   },
];

export const TECH_STACK: string[] = [
   'TypeScript',
   'React',
   'Next.js',
   'Supabase',
   'PostgreSQL',
   'MongoDB',
   'Stripe',
   'React Native',
   'Expo',
];

export const BRANDS: Brand[] = [
   { name: 'Golgorio', logo: '/brands/golgorio.webp' },
   { name: 'Guadaltel', logo: '/brands/guadaltel.webp' },
   { name: 'Éxxita', logo: '/brands/exxita.webp' },
   { name: 'Ellos 1991', logo: '/brands/ellos-1991.webp' },
   { name: 'Gimbal Project', logo: '/brands/gimbal.webp' },
   { name: 'Bim Consulting', logo: '/brands/bim-consulting.webp' },
   { name: 'STEIN', logo: '/brands/stein.webp' },
   { name: 'Emacarena', logo: '/brands/emacarena.webp' },
   { name: 'espacio_RES', logo: '/brands/espacio-res.webp' },
   { name: 'Ganama', logo: '/brands/ganama.webp' },
   { name: 'ITFB Consulting', logo: '/brands/iftb.webp' },
];

export const TESTIMONIALS: Testimonial[] = [
   { name: 'Germán Bayón', avatar: '/testimonials/german.webp' },
   { name: 'José Pedro Guzmán', avatar: '/testimonials/guzman.webp' },
];
