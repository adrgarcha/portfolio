import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

import Booker from '@/components/booker/booker';
import Reveal from '@/components/reveal';

export default async function AgendaSection() {
   const t = await getTranslations('home.agenda');
   const tCommon = await getTranslations('common');

   return (
      <section className="section-pad" id="agenda">
         <div className="wrap">
            <Reveal className="sec-head" >
               <div style={{ textAlign: 'center' }}>
                  <span className="eyebrow" style={{ justifyContent: 'center' }}>
                     {t('eyebrow')}
                  </span>
                  <h2 className="t-1" style={{ marginTop: '0.6rem' }}>
                     {t('heading')}
                  </h2>
                  <p className="lede" style={{ marginInline: 'auto' }}>
                     {t('lede')}
                  </p>
               </div>
            </Reveal>
            <Reveal>
               <Booker />
            </Reveal>
            <Reveal>
               <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <Link className="btn btn-primary btn-lg" href="/agenda">
                     {tCommon('bookMeetingCta')}
                  </Link>
               </div>
            </Reveal>
         </div>
      </section>
   );
}
