import type { Metadata } from 'next';
import Link from 'next/link';

import CaseCard from '@/components/case-card';
import CtaBand from '@/components/cta-band';
import PageHeader from '@/components/page-header';
import Reveal from '@/components/reveal';
import { getCase } from '@/lib/cases';
import type { Case } from '@/lib/types';

export const metadata: Metadata = {
   title: 'Desarrollador web en Sevilla',
   description:
      'Desarrollador web freelance en Sevilla. Software a medida, aplicaciones web, tiendas online e integraciones para pymes y negocios de Sevilla y Andalucía.',
   alternates: { canonical: '/desarrollador-web-sevilla' },
};

const RELATED: Case[] = ['optica', 'verifactu', 'cotizadora']
   .map((slug) => getCase(slug))
   .filter((item): item is Case => Boolean(item));

export default function DesarrolladorWebSevillaPage() {
   return (
      <main>
         <PageHeader
            breadcrumb={[{ label: 'inicio', href: '/' }, { label: 'desarrollador web en sevilla' }]}
            eyebrow="desarrollador web · sevilla"
            title="Desarrollador web freelance en Sevilla"
            lede="Soy Adri Chavero. Construyo software a medida para pymes y negocios de Sevilla y toda Andalucía: aplicaciones web, tiendas online e integraciones que resuelven un problema concreto, no plantillas genéricas."
         />

         <section className="section-pad">
            <Reveal className="wrap">
               <span className="eyebrow">qué hago</span>
               <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                  Desarrollo web a medida, de la idea al producto
               </h2>
               <p className="body" style={{ maxWidth: '70ch' }}>
                  El desarrollo de aplicaciones web en Sevilla suele venderse por catálogo: una plantilla, cuatro retoques y
                  a correr. Yo trabajo al revés. Primero entiendo tu negocio y el problema que te quita horas, y a partir de
                  ahí diseño y construyo el software que lo resuelve.
               </p>
               <p className="body" style={{ maxWidth: '70ch', marginTop: '1.2rem' }}>
                  Hago aplicaciones web a medida, paneles de gestión, integraciones entre tus sistemas (ERP, e-commerce,
                  facturación) y desarrollo de tienda online en Sevilla cuando lo que necesitas es vender. Una sola persona de
                  principio a fin: hablas directo conmigo, sin intermediarios ni sorpresas.
               </p>
            </Reveal>
         </section>

         <hr className="divider" />

         <section className="section-pad">
            <Reveal className="wrap">
               <span className="eyebrow">para quién</span>
               <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                  Pensado para negocios de Sevilla y Andalucía
               </h2>
               <p className="body" style={{ maxWidth: '70ch' }}>
                  Trabajo sobre todo con pymes, autónomos y negocios de Sevilla y alrededores que ya tienen un proceso manual
                  o una herramienta que se les ha quedado pequeña. Si llevas tu operación a base de hojas de cálculo, WhatsApp
                  y copia-pega, ahí es donde un desarrollo web a medida marca la diferencia.
               </p>
               <div className="svc" style={{ marginTop: '1.4rem' }}>
                  <ul>
                     <li>Aplicaciones web y paneles de gestión para tu día a día</li>
                     <li>Desarrollo de tienda online en Sevilla, conectada con tus sistemas</li>
                     <li>Integraciones entre ERP, e-commerce y facturación</li>
                     <li>Mantenimiento y evolución de lo que ya tienes en marcha</li>
                  </ul>
               </div>
               <p className="body" style={{ maxWidth: '70ch', marginTop: '1.4rem' }}>
                  No me dedico a un único sector: lo que tienen en común mis proyectos es que parten de un problema real de
                  negocio. He trabajado con empresas industriales, ópticas, agencias y startups, y en todos los casos el punto
                  de partida fue el mismo: una operación que dependía de hojas de cálculo, correos y procesos manuales que ya
                  no daban más de sí.
               </p>
            </Reveal>
         </section>

         <hr className="divider" />

         <section className="section-pad">
            <Reveal className="wrap">
               <span className="eyebrow">cómo trabajo</span>
               <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                  Hablas directo conmigo, de principio a fin
               </h2>
               <p className="body" style={{ maxWidth: '70ch' }}>
                  No subcontrato ni te paso de un comercial a un jefe de proyecto y de ahí a un becario. El desarrollo web que
                  contratas lo hago yo: la misma persona que entiende tu negocio es la que escribe el código y la que te coge
                  el teléfono cuando algo falla.
               </p>
               <p className="body" style={{ maxWidth: '70ch', marginTop: '1.2rem' }}>
                  Trabajo por fases y te enseño avances pronto, sobre algo que puedes tocar y no sobre un documento de cien
                  páginas. Así ajustamos rápido y no te llevas sorpresas al final. Cuando lanzamos, me quedo cerca para
                  mantenerlo y hacerlo crecer contigo. Estoy en Sevilla, así que también podemos vernos en persona si lo
                  prefieres, aunque la mayor parte del trabajo lo llevamos en remoto sin problema.
               </p>
            </Reveal>
         </section>

         <hr className="divider" />

         <section className="section-pad">
            <div className="wrap">
               <Reveal>
                  <span className="eyebrow">casos</span>
                  <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                     Proyectos reales, aquí al lado
                  </h2>
                  <p className="body" style={{ maxWidth: '70ch', marginBottom: '2.4rem' }}>
                     Algunos ejemplos: un{' '}
                     <Link className="text-link" href="/casos-de-exito/optica">
                        software de gestión para una óptica
                     </Link>
                     , el{' '}
                     <Link className="text-link" href="/casos-de-exito/verifactu">
                        software de facturación Verifactu
                     </Link>{' '}
                     de una empresa industrial o una{' '}
                     <Link className="text-link" href="/casos-de-exito/cotizadora">
                        cotizadora a medida
                     </Link>{' '}
                     que genera presupuestos en minutos.
                  </p>
               </Reveal>
               <Reveal className="cases-grid">
                  {RELATED.map((item) => (
                     <CaseCard key={item.slug} item={item} />
                  ))}
               </Reveal>
            </div>
         </section>

         <CtaBand
            heading="¿Necesitas un desarrollador web en Sevilla?"
            lede="Cuéntame tu proyecto en una reunión de 30 minutos, sin compromiso. Te digo si puedo ayudarte."
            source="geo-sevilla"
            backLink={{ label: 'Ver todos los casos', href: '/casos-de-exito' }}
         />
      </main>
   );
}
