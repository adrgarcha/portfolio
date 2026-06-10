import type { Case } from './types';

export const CASES: Case[] = [
   {
      slug: 'plataforma-incidencias',
      title: 'Plataforma de incidencias y features para una agencia de software',
      shortTitle: 'Plataforma de incidencias y features para una agencia de software',
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }, { label: 'saas' }],
      thumb: 'plataforma_saas · captura',
      img: '/case-studies/plataforma-gimbal.webp',
      featured: true,
      result:
         'Centraliza todas las peticiones de los clientes de la agencia en un único sitio: incidencias, nuevas funciones y prioridades, sin perder nada por el camino.',
      metric: '[ +XX% peticiones resueltas a tiempo ]',
      contexto: [
         'Una agencia de software gestionaba las peticiones de sus clientes por email, mensajes sueltos y hojas de cálculo. Las incidencias y las nuevas funciones se mezclaban y era difícil saber qué estaba pendiente y qué prioridad tenía cada cosa.',
      ],
      reto: [
         'Centralizar en un solo lugar todas las peticiones de todos los clientes de la agencia, con visibilidad para ambas partes y sin perder nada por el camino. Tenía que ser claro para el cliente final y útil para el equipo de la agencia.',
      ],
      solucion: [
         'Desarrollé una plataforma a medida donde cada cliente reporta incidencias y solicita nuevas funciones, y la agencia las prioriza, asigna y sigue su estado.',
         'Roles diferenciados, historial por cliente y un panel general para que la agencia tenga el control de todo el trabajo en curso.',
      ],
      resultado: {
         metric: '[ +XX% peticiones resueltas a tiempo ]',
         text: 'Una sola fuente de verdad para todas las peticiones. Menos cosas perdidas, prioridades claras y una relación más transparente con cada cliente.',
      },
   },
   {
      slug: 'cotizadora',
      title: 'Cotizadora a medida para una empresa industrial',
      shortTitle: 'Cotizadora a medida',
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }],
      thumb: 'cotizador · captura',
      img: '/case-studies/cotizadora.webp',
      result: 'Una empresa industrial genera presupuestos complejos en minutos.',
      metric: '[ —h ahorradas / presupuesto ]',
      contexto: [
         'Una empresa industrial elaboraba presupuestos complejos a mano, combinando muchas variables, materiales y configuraciones. El proceso era lento y propenso a errores de cálculo.',
      ],
      reto: [
         'Reducir drásticamente el tiempo de elaboración de un presupuesto y eliminar los errores manuales, manteniendo toda la complejidad de su catálogo y sus reglas de precio.',
      ],
      solucion: [
         'Construí un módulo de cotización a medida que recoge las variables del producto y genera el presupuesto completo en minutos, con la lógica de precios de la empresa integrada.',
         'Resultados consistentes, exportables y listos para enviar al cliente.',
      ],
      resultado: {
         metric: '[ —h ahorradas por presupuesto ]',
         text: 'Presupuestos en minutos en lugar de horas, sin errores de cálculo y con un formato profesional uniforme.',
      },
   },
   {
      slug: 'verifactu',
      title: 'Verifactu en software industrial',
      shortTitle: 'Verifactu en software industrial',
      tokens: [{ label: 'integración', accent: true }, { label: 'facturación' }],
      thumb: 'facturación · captura',
      img: '/case-studies/verifactu.webp',
      result: 'Facturación conforme a la normativa española, integrada en el sistema existente.',
      metric: '[ 100% facturas conformes ]',
      contexto: [
         'Un software industrial necesitaba adaptar su facturación a la normativa española vigente, integrándola en el sistema que ya usaban a diario.',
      ],
      reto: [
         'Cumplir con los requisitos de facturación conforme a la normativa sin romper el flujo de trabajo existente ni obligar al equipo a aprender una herramienta nueva.',
      ],
      solucion: [
         'Integré la facturación conforme a la normativa directamente en el software existente, de forma transparente para el usuario.',
         'Validaciones, registro y trazabilidad de cada factura según los requisitos legales.',
      ],
      resultado: {
         metric: '[ 100% facturas conformes ]',
         text: 'Facturación conforme a la normativa desde el mismo sistema de siempre, sin fricción para el equipo.',
      },
   },
   {
      slug: 'optica',
      title: 'Gestión de laboratorio para una óptica',
      shortTitle: 'Gestión de laboratorio para óptica',
      tokens: [{ label: 'next.js', accent: true }, { label: 'supabase' }],
      thumb: 'laboratorio · captura',
      img: '/case-studies/entregafas.webp',
      result: 'Clientes, productos y pedidos de laboratorio gestionados desde una sola app.',
      metric: '[ —% menos errores de pedido ]',
      contexto: [
         'Una óptica gestionaba clientes, productos y pedidos de laboratorio con herramientas dispersas, lo que generaba descoordinación entre tienda y laboratorio.',
      ],
      reto: [
         'Unificar la gestión de clientes, productos y pedidos de laboratorio en una sola aplicación, reduciendo errores y tiempos de espera.',
      ],
      solucion: [
         'Desarrollé una aplicación a medida para gestionar el ciclo completo: alta de clientes, catálogo de productos y seguimiento de pedidos de laboratorio.',
         'Estados claros de cada pedido y una visión compartida entre tienda y laboratorio.',
      ],
      resultado: {
         metric: '[ —% menos errores de pedido ]',
         text: 'Una herramienta única para todo el proceso, con menos errores y mejor coordinación interna.',
      },
   },
   {
      slug: 'golgorio',
      title: 'Golgorio — app para una startup deportiva',
      shortTitle: 'Golgorio — startup deportiva',
      tokens: [{ label: 'react native', accent: true }, { label: 'expo' }, { label: 'móvil' }],
      thumb: 'golgorio · app móvil',
      img: '/case-studies/app-golgorio.webp',
      result: 'App para organización deportiva, el caso móvil de referencia.',
      metric: '+700 usuarios activos',
      contexto: [
         'Golgorio es una startup deportiva que necesitaba una aplicación móvil para organizar su actividad y conectar con su comunidad de usuarios.',
      ],
      reto: [
         'Lanzar una app móvil sólida para iOS y Android que soportara el crecimiento de la comunidad y ofreciera una buena experiencia desde el primer día.',
      ],
      solucion: [
         'Desarrollé la app móvil con React Native y Expo, una sola base de código para ambas plataformas, rápida de iterar y de publicar.',
         'Funcionalidad orientada a la organización deportiva y al uso real de su comunidad.',
      ],
      resultado: {
         metric: '+700 usuarios activos',
         text: 'Es el caso móvil de referencia: una app en producción con más de 700 usuarios activos y margen para seguir creciendo.',
      },
   },
   {
      slug: 'emails-ecommerce',
      title: 'Centralización de emails e incidencias para 10 tiendas e-commerce',
      shortTitle: 'Centralización de emails e incidencias',
      tokens: [{ label: 'integración', accent: true }, { label: 'e-commerce' }],
      thumb: 'e-commerce · captura',
      img: '/case-studies/app-emails.webp',
      result: 'Proveedores, pedidos incorrectos e incidencias de 10 tiendas, gestionados desde un único panel.',
      metric: '[ 10 tiendas · 1 panel ]',
      contexto: [
         'Un grupo de 10 tiendas e-commerce gestionaba proveedores, pedidos incorrectos e incidencias a través de bandejas de correo separadas, lo que hacía muy difícil tener una visión global.',
      ],
      reto: [
         'Centralizar la gestión de proveedores, pedidos incorrectos e incidencias de las 10 tiendas en un único panel, sin perder el contexto de cada una.',
      ],
      solucion: [
         'Construí un sistema que unifica emails e incidencias de todas las tiendas, las clasifica y permite gestionarlas desde un solo lugar.',
         'Seguimiento por tienda, por proveedor y por estado de la incidencia.',
      ],
      resultado: {
         metric: '[ 10 tiendas · 1 panel ]',
         text: 'Una bandeja unificada para las 10 tiendas: menos correos perdidos y respuestas más rápidas a proveedores y clientes.',
      },
   },
];

export const HOME_CASES: Case[] = CASES.filter((c) => c.slug !== 'emails-ecommerce');

export function getCase(slug: string): Case | undefined {
   return CASES.find((c) => c.slug === slug);
}
