import type { Service } from './types';

export const SERVICES: Service[] = [
   {
      id: 'web',
      title: 'Aplicaciones web a medida',
      lead: 'Software hecho a la medida exacta de tu forma de trabajar, no al revés.',
      bullets: [
         'Herramientas internas que sustituyen hojas de cálculo y procesos manuales',
         'Paneles, gestores y plataformas a medida de tu operativa',
         'Arquitectura limpia, rápida y preparada para crecer',
      ],
      tokens: [{ label: 'next.js', accent: true }, { label: 'react' }],
      detailTokens: [{ label: 'next.js', accent: true }, { label: 'react' }, { label: 'typescript' }, { label: 'postgresql' }],
      href: '/servicios#web',
      featured: true,
      num: '01',
      kicker: 'servicio principal',
      problem:
         'Hoy lo llevas a base de hojas de cálculo, copia-pega entre herramientas y tareas que repites cada semana. Funciona… hasta que deja de funcionar. Te construyo una aplicación hecha a la medida exacta de tu proceso, que se encarga de ese trabajo repetitivo por ti.',
      howIWork:
         'Empiezo por entender tu problema real, no por una lista de funciones. Construyo por fases y te enseño avances pronto, para que ajustemos sobre algo que ya puedes tocar y no sobre un documento. Me vas a tener cerca en todo el proceso.',
      includes: [
         'Herramientas internas que sustituyen procesos manuales',
         'Paneles de gestión, gestores y plataformas a medida',
         'Acceso por roles y permisos para tu equipo',
         'Arquitectura limpia, rápida y preparada para crecer',
         'Despliegue, puesta en marcha y acompañamiento',
      ],
   },
   {
      id: 'integraciones',
      title: 'Integraciones y conexión de sistemas',
      lead: 'Que tus herramientas hablen entre sí y dejen de duplicarte el trabajo.',
      bullets: [
         'Conexión con e-commerce, ERPs y software de facturación',
         'Sincronización de pedidos, stock, clientes y pagos',
         'APIs y automatizaciones de datos entre plataformas',
      ],
      tokens: [{ label: 'integración', accent: true }, { label: 'stripe' }],
      detailTokens: [{ label: 'integración', accent: true }, { label: 'apis' }, { label: 'stripe' }, { label: 'webhooks' }],
      href: '/servicios#integraciones',
      num: '02',
      problem:
         '¿Tu tienda online no se entiende con tu programa de facturación? ¿El ERP por un lado, los pedidos por otro y tú en medio pasando datos a mano? Conecto tus herramientas para que la información viaje sola de una a otra y dejes de hacer tú de puente.',
      includes: [
         'Conexión con e-commerce (Shopify, WooCommerce, PrestaShop…)',
         'Sincronización con ERPs y software de facturación',
         'Pasarelas de pago y conciliación',
         'Automatización del flujo de datos entre plataformas',
      ],
   },
   {
      id: 'movil',
      title: 'Aplicaciones móviles',
      lead: 'Apps para que tu equipo o tus clientes trabajen mejor, allá donde estén.',
      bullets: [
         'Apps iOS y Android desde una sola base de código',
         'Para uso interno del equipo o de cara a tus clientes',
         'Rápidas de publicar y fáciles de mantener',
      ],
      tokens: [{ label: 'react native', accent: true }, { label: 'expo' }],
      detailTokens: [{ label: 'react native', accent: true }, { label: 'expo' }, { label: 'ios' }, { label: 'android' }],
      href: '/servicios#movil',
      num: '03',
      problem:
         'Tu equipo trabaja sobre el terreno con el móvil en la mano, o tus clientes quieren tu servicio a un toque, en el bolsillo. Te hago la app para iOS y Android desde una sola base de código, rápida de publicar y de mantener, sin que tengas que duplicar esfuerzo en cada plataforma.',
      includes: [
         'Apps de uso interno para tu equipo',
         'Apps de cara a tus clientes',
         'Publicación en App Store y Google Play',
         'Notificaciones, perfiles y sincronización en la nube',
      ],
   },
   {
      id: 'mantenimiento',
      title: 'Mantenimiento y evolución web',
      lead: 'Que lo que ya tienes siga funcionando, sea estable y siga mejorando.',
      bullets: [
         'Estabilización de proyectos que fallan o nadie mantiene',
         'Mejoras continuas, nuevas funciones y rendimiento',
         'Acompañamiento técnico a largo plazo',
      ],
      tokens: [{ label: 'mantenimiento', accent: true }, { label: 'soporte' }],
      detailTokens: [{ label: 'mantenimiento', accent: true }, { label: 'soporte' }, { label: 'rendimiento' }],
      href: '/servicios#mantenimiento',
      num: '04',
      problem:
         'Tienes algo construido que falla, va lento o que ya nadie mantiene, y cada semana aparece una papeleta nueva. Lo reviso a fondo, lo estabilizo y lo hago evolucionar contigo para que deje de darte sustos y vuelvas a confiar en ello.',
      includes: [
         'Auditoría y estabilización de proyectos existentes',
         'Corrección de errores y mejoras de rendimiento',
         'Nuevas funciones y evolución continua',
         'Acompañamiento técnico a largo plazo',
      ],
   },
];
