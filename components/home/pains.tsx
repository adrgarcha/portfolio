import CtaLink from '@/components/cta-link';
import Reveal from '@/components/reveal';
import { PAIN_POINTS } from '@/lib/constants';

export default function Pains() {
   return (
      <section className="section-pad" id="ayuda">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">en qué te puedo ayudar</span>
               <h2 className="t-1">Si algo de esto te suena, hablemos.</h2>
            </Reveal>
            <Reveal className="pains">
               {PAIN_POINTS.map((pain) => (
                  <div className="pain" key={pain.n}>
                     <span className="n">{pain.n}</span>
                     <p className="q">{pain.question}</p>
                     <p className="a">{pain.answer}</p>
                  </div>
               ))}
            </Reveal>
            <Reveal>
               <div style={{ marginTop: '2.4rem' }}>
                  <CtaLink source="pains" />
               </div>
            </Reveal>
         </div>
      </section>
   );
}
