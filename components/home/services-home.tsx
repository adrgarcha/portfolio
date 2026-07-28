import { getMessages, getTranslations } from 'next-intl/server';

import Reveal from '@/components/reveal';
import ServiceCard from '@/components/service-card';
import { SERVICES } from '@/lib/services';
import type { ServiceCopy } from '@/lib/types';

export default async function ServicesHome() {
   const t = await getTranslations('services');
   const messages = await getMessages();
   const items = messages.services.items as unknown as Record<string, ServiceCopy>;
   const services = SERVICES.map((service) => ({ ...service, ...items[service.id] }));

   return (
      <section className="section-pad" id="servicios">
         <div className="wrap">
            <Reveal className="sec-head">
               <span className="eyebrow">{t('homeEyebrow')}</span>
               <h2 className="t-1">{t('homeHeading')}</h2>
               <p className="lede">{t('homeLede')}</p>
            </Reveal>
            <div className="svc-grid">
               {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
               ))}
            </div>
         </div>
      </section>
   );
}
