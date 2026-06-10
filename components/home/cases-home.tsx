import Link from 'next/link';

import CaseCard from '@/components/case-card';
import Reveal from '@/components/reveal';
import { HOME_CASES } from '@/lib/cases';

export default function CasesHome() {
   return (
      <section className="section-pad" id="casos">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">casos de éxito</span>
               <h2 className="t-1">Software que ya está funcionando.</h2>
               <p className="lede">Proyectos reales para empresas reales: software que sus equipos usan cada día para trabajar mejor.</p>
            </Reveal>
            <Reveal className="cases-grid">
               {HOME_CASES.map((item) => (
                  <CaseCard key={item.slug} item={item} />
               ))}
            </Reveal>
            <Reveal>
               <div style={{ marginTop: '2.4rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link className="btn btn-ghost" href="/casos-de-exito">
                     Ver los 6 casos
                  </Link>
                  <span className="sep-ascii">· · ·</span>
               </div>
            </Reveal>
         </div>
      </section>
   );
}
