import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import Reveal from '@/components/reveal';
import { BRANDS } from '@/lib/constants';

export default async function LogosWall() {
   const t = await getTranslations('home.logos');

   return (
      <section className="section-pad">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="kicker">{t('kicker')}</span>
               <h2 className="t-2" style={{ marginTop: '0.6rem' }}>
                  {t('heading')}
               </h2>
            </Reveal>
            <Reveal className="logos">
               {BRANDS.map((brand) => (
                  <span className="logo-cell" key={brand.name}>
                     <Image src={brand.logo} alt={brand.name} fill sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                  </span>
               ))}
            </Reveal>
         </div>
      </section>
   );
}
