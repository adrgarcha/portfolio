import Reveal from './reveal';
import Tokens from './tokens';
import type { Service } from '@/lib/types';

interface ServiceDetailBlockProps {
   service: Service;
}

export default function ServiceDetailBlock({ service }: ServiceDetailBlockProps) {
   return (
      <section className="section-pad" id={service.id}>
         <div className="wrap about-grid">
            <Reveal>
               <span className="kicker">{service.num}</span>
               <h2 className="t-2" style={{ margin: '0.6rem 0 1rem' }}>
                  <span className="prompt"></span>
                  {service.title}
               </h2>
               <p className="body" style={{ fontSize: '1.02rem' }}>
                  {service.problem}
               </p>
               <div style={{ marginTop: '1.6rem' }}>
                  <Tokens tokens={service.detailTokens} />
               </div>
            </Reveal>
            <Reveal>
               <p className="comment">qué incluye</p>
               <ul className="svc" style={{ marginTop: '1rem' }}>
                  {service.includes?.map((item) => (
                     <li key={item}>{item}</li>
                  ))}
               </ul>
            </Reveal>
         </div>
      </section>
   );
}
