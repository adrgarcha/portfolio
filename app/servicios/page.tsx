import type { Metadata } from 'next';

import CtaBand from '@/components/cta-band';
import Reveal from '@/components/reveal';
import ServiceDetailBlock from '@/components/service-detail-block';
import Tokens from '@/components/tokens';
import PageHeader from '@/components/page-header';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = {
   title: 'Servicios',
   description:
      'Desarrollo web a medida, integraciones, apps móviles y mantenimiento. Software hecho para resolver un problema concreto de tu negocio.',
};

const [web, ...rest] = SERVICES;

export default function ServiciosPage() {
   return (
      <main>
         <PageHeader
            breadcrumb={[{ label: 'inicio', href: '/' }, { label: 'servicios' }]}
            eyebrow="servicios"
            title="Cómo te ayudo a resolver el problema."
            lede="Trabajo de forma directa y cercana: entiendo tu negocio, te digo qué se puede hacer y construyo software que de verdad usas. Sin intermediarios, sin humo, sin precios cerrados de catálogo."
         />

         <section className="section-pad" id="web">
            <div className="wrap">
               <Reveal className="card svc feature">
                  <div className="svc-inner">
                     <div>
                        <span className="kicker">{web.kicker}</span>
                        <h2 className="t-2" style={{ margin: '0.6rem 0 1rem' }}>
                           <span className="prompt"></span>
                           {web.title}
                        </h2>
                        <p className="body" style={{ fontSize: '1.05rem' }}>
                           {web.problem}
                        </p>
                        <p className="comment" style={{ marginTop: '1.4rem' }}>
                           cómo trabajo
                        </p>
                        <p className="body" style={{ marginTop: '0.4rem' }}>
                           {web.howIWork}
                        </p>
                     </div>
                     <div>
                        <p className="comment">qué incluye</p>
                        <ul className="svc" style={{ marginTop: '1rem' }}>
                           {web.includes?.map((item) => (
                              <li key={item}>{item}</li>
                           ))}
                        </ul>
                        <div style={{ marginTop: '1.6rem' }}>
                           <Tokens tokens={web.detailTokens} />
                        </div>
                     </div>
                  </div>
               </Reveal>
            </div>
         </section>

         {rest.map((service) => (
            <div key={service.id}>
               <hr className="divider" />
               <ServiceDetailBlock service={service} />
            </div>
         ))}

         <CtaBand heading="¿Cuál de estos es tu caso?" lede="Cuéntamelo en una reunión de 30 minutos. Sin compromiso, hablamos de tu necesidad concreta." source="servicios" />
      </main>
   );
}
