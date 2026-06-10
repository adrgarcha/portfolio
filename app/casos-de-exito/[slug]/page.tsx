import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import CtaBand from '@/components/cta-band';
import Breadcrumb from '@/components/breadcrumb';
import Tokens from '@/components/tokens';
import { CASES, getCase } from '@/lib/cases';

interface PageProps {
   params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
   return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { slug } = await params;
   const item = getCase(slug);
   if (!item) return {};
   return {
      title: item.shortTitle,
      description: item.result,
   };
}

export default async function CaseDetailPage({ params }: PageProps) {
   const { slug } = await params;
   const item = getCase(slug);
   if (!item) notFound();

   return (
      <main>
         <section className="page-head detail-hero">
            <div className="wrap">
               <Breadcrumb
                  items={[
                     { label: 'inicio', href: '/' },
                     { label: 'casos de éxito', href: '/casos-de-exito' },
                     { label: item.shortTitle },
                  ]}
               />
               <span className="eyebrow">caso de éxito</span>
               <h1 className="t-1" style={{ marginTop: '0.6rem', maxWidth: '22ch' }}>
                  {item.title}
               </h1>
               <div className="token-row" style={{ marginTop: '1.4rem' }}>
                  <Tokens tokens={item.tokens} />
               </div>
               <div className="thumb-lg" style={{ position: 'relative' }}>
                  {item.img ? (
                     <Image src={item.img} alt={item.shortTitle} fill sizes="(max-width: 1120px) 100vw, 1120px" style={{ objectFit: 'cover' }} />
                  ) : (
                     <div className="ph">{item.thumb}</div>
                  )}
               </div>
            </div>
         </section>

         <section style={{ paddingBottom: 'clamp(48px, 6vw, 90px)' }}>
            <div className="wrap">
               <div className="detail-block">
                  <span className="label">Contexto</span>
                  <div>
                     {item.contexto.map((p) => (
                        <p key={p}>{p}</p>
                     ))}
                  </div>
               </div>
               <div className="detail-block">
                  <span className="label">El reto</span>
                  <div>
                     {item.reto.map((p) => (
                        <p key={p}>{p}</p>
                     ))}
                  </div>
               </div>
               <div className="detail-block">
                  <span className="label">Qué hice</span>
                  <div>
                     {item.solucion.map((p) => (
                        <p key={p}>{p}</p>
                     ))}
                  </div>
               </div>
               <div className="detail-block">
                  <span className="label">Resultado</span>
                  <div>
                     <p className="metric-big">{item.resultado.metric}</p>
                     <p style={{ marginTop: '1rem' }}>{item.resultado.text}</p>
                  </div>
               </div>
            </div>
         </section>

         <CtaBand
            heading="¿Tienes un reto parecido?"
            lede="Hablemos 30 minutos, sin compromiso. Te digo si puedo ayudarte."
            source={`caso-${item.slug}`}
            backLink={{ label: 'Ver todos los casos', href: '/casos-de-exito' }}
         />
      </main>
   );
}
