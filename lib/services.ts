import type { Service } from './types';

export const SERVICES: Service[] = [
   {
      id: 'web',
      title: 'Aplicaciones web a medida',
      lead: 'Software hecho a la medida exacta de tu proceso, no al revés.',
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
         'Software hecho a la medida exacta de tu proceso. Si hoy lo resuelves con hojas de cálculo, copia-pega entre herramientas o tareas manuales que se repiten, eso se puede convertir en una aplicación que trabaja por ti.',
      howIWork:
         'Empezamos por entender el problema real, no la lista de funciones. Construyo por fases, te enseño avances pronto y ajustamos sobre algo que ya puedes tocar.',
      includes: [
         'Herramientas internas que sustituyen procesos manuales',
         'Paneles de gestión, gestores y plataformas a medida',
         'Acceso por roles y permisos para tu equipo',
         'Arquitectura limpia, rápida y preparada para crecer',
         'Despliegue y puesta en marcha',
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
         '¿Tu tienda no habla con tu facturación? ¿Tu ERP por un lado y tus pedidos por otro? Conecto tus herramientas para que los datos fluyan solos y dejes de duplicar trabajo.',
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
         'Apps para que tu equipo trabaje mejor sobre el terreno o para que tus clientes tengan tu servicio en el bolsillo. Una sola base de código para iOS y Android, rápida de publicar y de mantener.',
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
         'Tienes algo construido que falla, va lento o nadie mantiene. Lo reviso, lo estabilizo y lo hago evolucionar para que deje de darte sustos y siga mejorando con el tiempo.',
      includes: [
         'Auditoría y estabilización de proyectos existentes',
         'Corrección de errores y mejoras de rendimiento',
         'Nuevas funciones y evolución continua',
         'Acompañamiento técnico a largo plazo',
      ],
   },
];
