import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import { toTokens } from '@/lib/services';
import type { Service, ServiceCopy } from '@/lib/types';
import Reveal from './reveal';
import Tokens from './tokens';

interface ServiceCardProps {
   service: Service & ServiceCopy;
}

export default async function ServiceCard({ service }: ServiceCardProps) {
   const t = await getTranslations('common');
   const hash = service.href.split('#')[1];

   return (
      <Reveal as="article" className="card svc">
         <h3>
            <span className="prompt"></span>
            {service.title}
         </h3>
         <p className="lead">{service.lead}</p>
         <ul>
            {service.bullets.map((bullet) => (
               <li key={bullet}>{bullet}</li>
            ))}
         </ul>
         <div className="svc-foot">
            <Tokens tokens={toTokens(service.tokens)} />
            <Link className="link-arrow" href={{ pathname: '/servicios', hash }}>
               {t('viewDetail')} <span className="arrow">→</span>
            </Link>
         </div>
      </Reveal>
   );
}
