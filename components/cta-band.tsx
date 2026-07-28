import { Link, type AppHref } from '@/i18n/navigation';

import CtaLink from './cta-link';
import Reveal from './reveal';

interface CtaBandProps {
   heading: string;
   lede: string;
   source: string;
   backLink?: { label: string; href: string };
}

export default function CtaBand({ heading, lede, source, backLink }: CtaBandProps) {
   return (
      <section className="section-pad">
         <Reveal className="wrap cta-band">
            <h2 className="t-1">{heading}</h2>
            <p className="lede">{lede}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
               <CtaLink large source={source} />
               {backLink && (
                  <Link className="link-arrow" href={backLink.href as AppHref}>
                     {backLink.label} <span className="arrow">→</span>
                  </Link>
               )}
            </div>
         </Reveal>
      </section>
   );
}
