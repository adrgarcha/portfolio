import { getTranslations } from 'next-intl/server';

import Reveal from '@/components/reveal';
import { TECH_STACK } from '@/lib/constants';

export default async function TechStack() {
   const t = await getTranslations('home.techStack');

   return (
      <section className="section-pad">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="kicker">{t('kicker')}</span>
               <h2 className="t-2" style={{ marginTop: '0.6rem' }}>
                  {t('heading')}
               </h2>
            </Reveal>
            <Reveal className="stack-row">
               {TECH_STACK.map((tech) => (
                  <span className="tech" key={tech}>
                     <span className="dot"></span>
                     {tech}
                  </span>
               ))}
            </Reveal>
         </div>
      </section>
   );
}
