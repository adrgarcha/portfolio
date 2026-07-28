import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

import Portrait from '@/components/portrait';
import Reveal from '@/components/reveal';

function strong(chunks: ReactNode) {
   return <strong>{chunks}</strong>;
}

export default async function About() {
   const t = await getTranslations('home.about');

   return (
      <section className="section-pad" id="sobre-mi">
         <div className="wrap about-grid">
            <Reveal className="about-photo">
               <Portrait
                  src="/about-me/monesterio.webp"
                  alt={t('portraitAlt')}
                  placeholder={t('portraitPlaceholder')}
                  tagPrefix="$"
                  tagText="cd ~/origenes"
               />
            </Reveal>
            <Reveal className="about-copy">
               <span className="eyebrow">{t('eyebrow')}</span>
               <h2 className="t-1" style={{ margin: '0.6rem 0 1.4rem' }}>
                  {t('heading')}
               </h2>
               <p>{t.rich('paragraph1', { b: strong })}</p>
               <p>{t.rich('paragraph2', { b: strong })}</p>
               <p>{t.rich('paragraph3', { b: strong })}</p>
            </Reveal>
         </div>
      </section>
   );
}
