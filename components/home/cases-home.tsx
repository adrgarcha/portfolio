import { getTranslations } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';

import CaseCard from '@/components/case-card';
import Reveal from '@/components/reveal';
import { getHomeCases } from '@/lib/cases';

interface CasesHomeProps {
   locale: Locale;
}

export default async function CasesHome({ locale }: CasesHomeProps) {
   const t = await getTranslations('home.cases');
   const homeCases = getHomeCases(locale);

   return (
      <section className="section-pad" id="casos">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">{t('eyebrow')}</span>
               <h2 className="t-1">{t('heading')}</h2>
               <p className="lede">{t('lede')}</p>
            </Reveal>
            <Reveal className="cases-grid">
               {homeCases.map((item) => (
                  <CaseCard key={item.id} item={item} />
               ))}
            </Reveal>
            <Reveal>
               <div style={{ marginTop: '2.4rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link className="btn btn-ghost" href="/casos-de-exito">
                     {t('viewAllLabel')}
                  </Link>
                  <span className="sep-ascii">· · ·</span>
               </div>
            </Reveal>
         </div>
      </section>
   );
}
