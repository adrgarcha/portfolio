import { getTranslations } from 'next-intl/server';

import CtaLink from '@/components/cta-link';
import Reveal from '@/components/reveal';

interface PainItem {
   n: string;
   question: string;
   answer: string;
}

export default async function Pains() {
   const t = await getTranslations('pains');
   const items = t.raw('items') as PainItem[];

   return (
      <section className="section-pad" id="ayuda">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">{t('eyebrow')}</span>
               <h2 className="t-1">{t('heading')}</h2>
            </Reveal>
            <Reveal className="pains">
               {items.map((pain) => (
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
