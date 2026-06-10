import Link from 'next/link';

import Booker from '@/components/booker/booker';
import Reveal from '@/components/reveal';

export default function AgendaSection() {
   return (
      <section className="section-pad" id="agenda">
         <div className="wrap">
            <Reveal className="sec-head" >
               <div style={{ textAlign: 'center' }}>
                  <span className="eyebrow" style={{ justifyContent: 'center' }}>
                     hablemos de tu proyecto
                  </span>
                  <h2 className="t-1" style={{ marginTop: '0.6rem' }}>
                     Cuéntame qué necesitas.
                  </h2>
                  <p className="lede" style={{ marginInline: 'auto' }}>
                     30 minutos, sin compromiso. Me cuentas tu problema y vemos juntos si puedo ayudarte.
                  </p>
               </div>
            </Reveal>
            <Reveal>
               <Booker />
            </Reveal>
            <Reveal>
               <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <Link className="btn btn-primary btn-lg" href="/agenda">
                     Agenda una reunión
                  </Link>
               </div>
            </Reveal>
         </div>
      </section>
   );
}
