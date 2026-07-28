import { getTranslations } from 'next-intl/server';

import CtaLink from './cta-link';
import HeroTypewriter from './hero-typewriter';
import Portrait from './portrait';

export default async function Hero() {
   const t = await getTranslations('home.hero');

   return (
      <section className="hero">
         <div className="wrap hero-grid">
            <div className="hero-copy">
               <h1 className="hero-meta">
                  <span className="prompt"></span>
                  <HeroTypewriter text={t('typewriterText')} />
               </h1>
               <p className="h-hero">{t('heading')}</p>
               <p className="lede">{t('lede')}</p>
               <div className="hero-actions">
                  <CtaLink large source="hero" />
                  <span className="note comment">{t('note')}</span>
               </div>
            </div>
            <div className="hero-photo">
               <Portrait src="/me.webp" alt={t('portraitAlt')} tagPrefix="$" tagText="whoami → adri_chavero" />
            </div>
         </div>
      </section>
   );
}
