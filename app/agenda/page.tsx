import type { Metadata } from 'next';

import Booker from '@/components/booker/booker';
import Breadcrumb from '@/components/breadcrumb';

export const metadata: Metadata = {
   title: 'Agenda una reunión',
   description: 'Reserva una videollamada de 30 minutos, sin compromiso. Me cuentas tu necesidad y te digo si puedo ayudarte y cómo.',
};

export default function AgendaPage() {
   return (
      <main>
         <section style={{ paddingTop: 'clamp(40px, 6vw, 72px)', paddingBottom: 'clamp(56px, 8vw, 110px)' }}>
            <div className="wrap">
               <Breadcrumb items={[{ label: 'inicio', href: '/' }, { label: 'agenda' }]} />
               <div style={{ textAlign: 'center', maxWidth: '64ch', margin: '0 auto clamp(36px, 5vw, 56px)' }}>
                  <span className="eyebrow" style={{ justifyContent: 'center' }}>
                     agenda una reunión
                  </span>
                  <h1 className="t-1" style={{ marginTop: '0.6rem' }}>
                     Hablemos de tu proyecto.
                  </h1>
                  <p className="lede" style={{ marginInline: 'auto', marginTop: '1.2rem' }}>
                     Una videollamada de <strong style={{ color: 'var(--text)' }}>30 minutos, sin compromiso</strong>. Me cuentas tu necesidad, te
                     hago las preguntas justas y te digo con honestidad si puedo ayudarte y cómo.
                  </p>
               </div>

               <div style={{ maxWidth: '920px', marginInline: 'auto' }}>
                  <Booker />
               </div>

               <p className="comment" style={{ textAlign: 'center', marginTop: '2rem', maxWidth: '60ch', marginInline: 'auto' }}>
                  qué esperar: una conversación, no una venta. Sales con una idea clara de los siguientes pasos.
               </p>
            </div>
         </section>
      </main>
   );
}
