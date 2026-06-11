import type { Metadata } from 'next';

import CaseCard from '@/components/case-card';
import CtaBand from '@/components/cta-band';
import PageHeader from '@/components/page-header';
import Reveal from '@/components/reveal';
import { CASES } from '@/lib/cases';

export const metadata: Metadata = {
   title: 'Casos de éxito',
   description: 'Proyectos reales para empresas reales. Cada uno empezó por un problema concreto de negocio.',
   alternates: { canonical: '/casos-de-exito' },
};

export default function CasosDeExitoPage() {
   return (
      <main>
         <PageHeader
            breadcrumb={[{ label: 'inicio', href: '/' }, { label: 'casos de éxito' }]}
            eyebrow="casos de éxito"
            title="Software que ya está funcionando."
            lede="Proyectos reales para empresas reales. Cada uno empezó por un problema concreto de negocio y terminó en algo que la gente usa cada día."
         />

         <section className="section-pad" style={{ paddingTop: 'clamp(24px, 4vw, 48px)' }}>
            <div className="wrap">
               <Reveal className="cases-grid">
                  {CASES.map((item) => (
                     <CaseCard key={item.slug} item={item} />
                  ))}
               </Reveal>
            </div>
         </section>

         <CtaBand
            heading="¿Tu proyecto puede ser el próximo?"
            lede="Cuéntame qué necesitas en una reunión de 30 minutos, sin compromiso."
            source="casos-index"
         />
      </main>
   );
}
