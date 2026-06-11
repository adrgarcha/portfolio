import type { Brand, FooterColumn, NavLink, PainPoint, Testimonial, Topic } from './types';

export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com/adrichavero/30min';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/adrichavero';

export const NAV_LINKS: NavLink[] = [
   { label: 'Inicio', href: '/' },
   { label: 'Servicios', href: '/servicios' },
   { label: 'Casos de éxito', href: '/casos-de-exito' },
];

export const FOOTER_STATEMENT = 'de la idea al producto. software a medida desde Sevilla.';

export const FOOTER_COLUMNS: FooterColumn[] = [
   {
      title: 'navegación',
      links: [
         { label: 'Inicio', href: '/' },
         { label: 'Servicios', href: '/servicios' },
         { label: 'Casos de éxito', href: '/casos-de-exito' },
         { label: 'Desarrollador web en Sevilla', href: '/desarrollador-web-sevilla' },
         { label: 'Agenda', href: '/agenda' },
      ],
   },
   {
      title: 'servicios',
      links: [
         { label: 'Aplicaciones web', href: '/servicios#web' },
         { label: 'Integraciones', href: '/servicios#integraciones' },
         { label: 'Apps móviles', href: '/servicios#movil' },
         { label: 'Mantenimiento', href: '/servicios#mantenimiento' },
      ],
   },
   {
      title: 'legal',
      links: [
         { label: 'Aviso legal', href: '/aviso-legal' },
         { label: 'Privacidad', href: '/politica-de-privacidad' },
         { label: 'Cookies', href: '/politica-de-cookies' },
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

export const PAIN_POINTS: PainPoint[] = [
   {
      n: '// 01',
      question: '¿Tienes un proceso manual que te roba horas y necesitas una herramienta hecha a tu medida?',
      answer: 'Convierto esa hoja de cálculo o ese flujo de copia-pega en software que trabaja por ti.',
   },
   {
      n: '// 02',
      question: '¿Tu software actual no se entiende con tus otras herramientas (ERP, e-commerce, facturación)?',
      answer: 'Conecto tus sistemas para que los datos fluyan solos, sin dobles registros ni errores.',
   },
   {
      n: '// 03',
      question: '¿Necesitas una app para que tu equipo o tus clientes trabajen mejor?',
      answer: 'Diseño y desarrollo aplicaciones móviles pensadas para el uso real del día a día.',
   },
   {
      n: '// 04',
      question: '¿Tienes algo ya construido que se cae y nadie mantiene?',
      answer: 'Reviso, estabilizo y hago evolucionar lo que ya tienes para que deje de darte sustos.',
   },
];

export const TESTIMONIALS: Testimonial[] = [
   {
      quote: 'Está muy bien todo Adrián, me gusta mucho lo que estás haciendo con la app. Muy chulo.',
      name: 'Germán Bayón',
      role: 'Project Manager · Bim Consulting',
      avatar: '/testimonials/german.webp',
   },
   {
      quote: 'Enhorabuena Adri, estás haciendo un gran trabajo.',
      name: 'José Pedro Guzmán',
      role: 'CEO · Gimbal Project',
      avatar: '/testimonials/guzman.webp',
   },
];

export const LINKEDIN_TOPICS: Topic[] = [
   { text: 'Desarrollo de software a medida', meta: 'post' },
   { text: 'Integraciones que ahorran horas de trabajo', meta: 'post' },
   { text: 'El día a día como desarrollador freelance', meta: 'post' },
   { text: 'Herramientas y trucos para devs', meta: 'post' },
];

export const COPYRIGHT = '© 2026 Adri Chavero · Sevilla, España';
export const BUILT_WITH = 'built with good coffee';
