import Reveal from '@/components/reveal';
import ServiceCard from '@/components/service-card';
import { SERVICES } from '@/lib/services';

export default function ServicesHome() {
   return (
      <section className="section-pad" id="servicios">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">servicios</span>
               <h2 className="t-1">Lo que construyo para tu negocio.</h2>
               <p className="lede">
                  El desarrollo web a medida es el núcleo. Alrededor, todo lo necesario para que tu software funcione, crezca y siga bien cuidado.
               </p>
            </Reveal>
            <div className="svc-grid">
               {SERVICES.map((service) => (
                  <ServiceCard key={service.id} service={service} />
               ))}
            </div>
         </div>
      </section>
   );
}
