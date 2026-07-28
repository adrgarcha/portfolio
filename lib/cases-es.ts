import type { CaseCopy } from './types';

export const CASE_COPY_ES: Record<string, CaseCopy> = {
   'plataforma-incidencias': {
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }, { label: 'saas' }],
      title: 'Plataforma de incidencias y features para una agencia de software',
      shortTitle: 'Plataforma de incidencias y features para una agencia de software',
      thumb: 'plataforma_saas · captura',
      result:
         'Centraliza todas las peticiones de los clientes de la agencia en un único sitio: incidencias, nuevas funciones, archivos y accesos, sin perder nada por el camino.',
      metric: '+62% peticiones resueltas a tiempo',
      context: [
         'Una agencia de software con un equipo de 3-4 personas gestionaba entre 5 y 10 clientes a la vez, y lo llevaba todo por WhatsApp: las peticiones de los clientes y las tareas de los desarrolladores, mezcladas en las mismas conversaciones.',
         'Habían probado un tablero de tareas, pero no llegó a encajar. Después de cuatro años así, las solicitudes, los archivos y los accesos se perdían por el camino.',
      ],
      challenge: [
         'Sacar toda la operación de WhatsApp y centralizar en un único lugar las solicitudes, archivos, permisos, accesos y servicios de cada cliente. Tenía que ser simple para que el cliente final lo adoptara sin fricción y potente para que el equipo tuviera el control de todo.',
      ],
      solution: [
         'Desarrollé una plataforma a medida donde cada cliente reporta incidencias, solicita nuevas funciones y consulta sus archivos, accesos y servicios, mientras la agencia prioriza, asigna y sigue cada petición desde un panel general.',
         'Integré un agente de IA que analiza y clasifica cada solicitud, e incluso resuelve por sí solo las de baja y media complejidad. Todo sobre una base mantenible y preparada para escalar.',
      ],
      outcome: {
         metric: '+62% peticiones resueltas a tiempo',
         text: 'Una sola fuente de verdad para toda la operación. El equipo la adoptó de inmediato y los clientes, reticentes al principio, ya trabajan dentro y lo agradecen. En tres meses dejó de perderse trabajo por el camino.',
      },
   },
   cotizadora: {
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }],
      title: 'Cotizadora a medida para una empresa industrial',
      shortTitle: 'Cotizadora a medida',
      thumb: 'cotizador · captura',
      result: 'Una empresa industrial genera presupuestos complejos en minutos.',
      metric: '−38% tiempo por presupuesto',
      context: [
         'Una empresa industrial elaboraba presupuestos combinando materiales, mano de obra y costes adicionales, cada uno con sus propias condiciones y reglas de precio.',
         'Lo hacían sobre un sistema antiguo con una deuda técnica enorme y una interfaz tan poco intuitiva que solo unas pocas personas, de años usándola, sabían manejarla. Para alguien nuevo era prácticamente imposible.',
      ],
      challenge: [
         'Trasladar toda la lógica de precios, con su enorme cantidad de casos concretos, a una herramienta nueva, clara y usable por cualquiera, sin perder un ápice de la complejidad del catálogo.',
      ],
      solution: [
         'Construí un módulo de cotización a medida que recoge las variables del producto y genera el presupuesto completo en minutos, con toda la lógica de precios de la empresa integrada.',
         'El mayor reto fue la mano de obra: se calcula de forma automática y en tiempo real a partir de muchísimos parámetros que se combinan entre sí. Resultados consistentes, exportables y listos para enviar al cliente.',
      ],
      outcome: {
         metric: '−38% tiempo por presupuesto',
         text: 'Presupuestos en minutos en lugar de horas, sin errores de cálculo y con un formato profesional uniforme.',
      },
   },
   verifactu: {
      tokens: [{ label: 'integración', accent: true }, { label: 'facturación' }],
      title: 'Software de facturación Verifactu para industria',
      shortTitle: 'Facturación Verifactu para industria',
      metaTitle: 'Software de facturación Verifactu',
      metaDescription:
         'Software de facturación Verifactu para una empresa industrial: facturación conforme a la normativa, con validaciones, registro y trazabilidad en cada factura.',
      thumb: 'facturación · captura',
      result: 'Facturación conforme a Verifactu, migrada fuera de un legacy en Windows 95.',
      metric: '100% facturas conformes a la normativa',
      context: [
         'El sistema de facturación de esta empresa industrial corría sobre una aplicación de escritorio nativa alojada en un único ordenador con Windows 95, conectado a una base de datos Oracle de más de 300 tablas.',
         'Cada cambio obligaba a conectarse en remoto a esa máquina (lentísima) y tocar el código allí dentro. Y encima tenían un plazo legal encima: su facturación debía cumplir con Verifactu.',
      ],
      challenge: [
         'Adaptar la facturación a Verifactu sin romper un sistema crítico de décadas y, a la vez, empezar a sacarlo de esa máquina antes de que la deuda técnica los bloqueara por completo.',
      ],
      solution: [
         'En lugar de parchear el legacy, migré por completo el software de facturación al sistema nuevo, cumpliendo Verifactu de principio a fin: cada factura pasa por el servicio oficial, con validaciones, registro y trazabilidad.',
         'Mantuve la compatibilidad con el sistema antiguo para no interrumpir la operación, dando el primer paso para abandonar esa dependencia del Windows 95.',
      ],
      outcome: {
         metric: '100% facturas conformes a la normativa',
         text: 'Facturación 100% conforme a Verifactu y lista para el plazo legal, por fin fuera del cuello de botella de la máquina antigua.',
      },
   },
   optica: {
      tokens: [{ label: 'next.js', accent: true }, { label: 'postgresql' }],
      title: 'Software de gestión para una óptica',
      shortTitle: 'Software de gestión para óptica',
      metaTitle: 'Software para óptica a medida',
      metaDescription:
         'Software de gestión para óptica a medida: historial de cada cliente, graduaciones, pedidos de laboratorio y catálogo. Programa de gestión para ópticas hecho a medida.',
      thumb: 'laboratorio · captura',
      result: 'Por primera vez, un historial completo de cada cliente: graduaciones, gafas, pedidos y revisiones.',
      metric: 'Historial 360° de cada cliente',
      context: [
         'Una óptica gestionaba a sus clientes sin ningún tipo de registro: no había historial de graduaciones, ni de gafas vendidas, ni de pedidos, ni de revisiones. No se guardaba nada.',
         'Eso provocaba errores de graduación y hacía imposible entender el recorrido de cada cliente.',
      ],
      challenge: [
         'Dar a la tienda y al laboratorio una única herramienta para todo el ciclo: clientes, productos y pedidos de laboratorio; y, sobre todo, construir desde cero el historial de cada cliente.',
      ],
      solution: [
         'Desarrollé un software de gestión para la óptica a medida que cubre todo el proceso: ficha de cliente con su historial de graduaciones y optometría, gafas vendidas, pedidos y revisiones, catálogo de productos y seguimiento de los pedidos de laboratorio.',
         'Estados claros de cada pedido y una visión compartida entre tienda y laboratorio para reducir los errores que obligaban a rehacer lentes.',
      ],
      outcome: {
         metric: 'Historial 360° de cada cliente',
         text: 'Pedidos y graduaciones mucho más precisos y, por primera vez, un control real del recorrido de cada cliente. Menos lentes que rehacer y menos costes de material y personal.',
      },
   },
   golgorio: {
      tokens: [{ label: 'react native', accent: true }, { label: 'expo' }, { label: 'móvil' }],
      title: 'Golgorio — app para una startup deportiva',
      shortTitle: 'Golgorio — startup deportiva',
      thumb: 'golgorio · app móvil',
      result: 'App para organizar fútbol amateur de principio a fin, el caso móvil de referencia.',
      metric: '+4.500 usuarios activos al mes',
      context: [
         'Golgorio es una startup deportiva que quería una app para organizar fútbol amateur de principio a fin: crear o unirse a equipos, encontrar pistas disponibles, reservarlas y dividir el pago entre los jugadores, todo desde el móvil.',
      ],
      challenge: [
         'Levantar desde cero una app para iOS y Android capaz de sostener una comunidad creciente, integrándose con los sistemas de reserva de las pistas y con pagos individuales por jugador.',
      ],
      solution: [
         'Partí de los diseños y construí yo solo toda la base de la app con React Native y Expo: gestión de usuarios, equipos, búsqueda y reserva de pistas integrada con sus sistemas, y pagos divididos por jugador.',
         'También desarrollé el panel de administración. Una sola base de código para ambas plataformas, rápida de iterar y publicar.',
      ],
      outcome: {
         metric: '+4.500 usuarios activos al mes',
         text: 'Hoy es el caso móvil de referencia: una app en producción y en las stores oficiales, con más de 4.500 usuarios activos al mes alcanzados en dos años.',
      },
   },
   'emails-ecommerce': {
      tokens: [{ label: 'integración', accent: true }, { label: 'e-commerce' }],
      title: 'Centralización de emails e incidencias para 10 tiendas e-commerce',
      shortTitle: 'Centralización de emails e incidencias',
      thumb: 'e-commerce · captura',
      result: 'Correos, pedidos e incidencias de 10 tiendas en 5 idiomas, gestionados desde un único panel con IA.',
      metric: '10 tiendas · 5 idiomas · 1 panel',
      context: [
         'Un único cliente con 10 tiendas de gafas en WooCommerce, vendiendo a Francia, Italia, Alemania, Reino Unido y España. Cada tienda recibía una media de 50 correos al día (unos 500 en total) sobre proveedores, transportistas e incidencias de pedidos: gafas que llegaban rotas, del color equivocado o con la graduación incorrecta.',
         'Todo repartido en bandejas separadas y en cinco idiomas distintos. Una locura.',
      ],
      challenge: [
         'Centralizar en un único panel los correos e incidencias de las 10 tiendas, cruzados con los datos de cada pedido, y resolver la barrera del idioma para que una sola persona pudiera gestionarlo todo desde español.',
      ],
      solution: [
         'Construí un sistema que unifica los correos (vía IMAP) y los pedidos de cada tienda (vía la API de WooCommerce), todo configurable desde un panel de administración junto con las métricas de respuesta.',
         'Integré los transportistas: DHL, Spring, FedEx, MRW y UPS; y una IA que traduce cada mensaje, redacta la respuesta y la envía en el idioma del cliente, aunque el gestor escriba siempre en español.',
      ],
      outcome: {
         metric: '10 tiendas · 5 idiomas · 1 panel',
         text: 'Una sola bandeja para las 10 tiendas, con toda la información del cliente y del pedido a mano. Con la respuesta ya redactada por IA y traducida, atender a proveedores y clientes pasó a ser prácticamente fricción cero.',
      },
   },
};
