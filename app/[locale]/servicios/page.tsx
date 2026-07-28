import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';

import CtaBand from '@/components/cta-band';
import Reveal from '@/components/reveal';
import ServiceDetailBlock from '@/components/service-detail-block';
import Tokens from '@/components/tokens';
import PageHeader from '@/components/page-header';
import { SERVICES, toTokens } from '@/lib/services';
import { alternatesFor } from '@/lib/seo';
import type { ServiceCopy } from '@/lib/types';

interface PageProps {
   params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'servicesPage' });

   return {
      title: t('metaTitle'),
      description: t('metaDescription'),
      alternates: alternatesFor(locale as Locale, { pathname: '/servicios' }),
   };
}

export default async function ServiciosPage({ params }: PageProps) {
   const { locale } = await params;
   setRequestLocale(locale as Locale);

   const t = await getTranslations('servicesPage');
   const tCommon = await getTranslations('common');
   const messages = await getMessages();
   const items = messages.services.items as unknown as Record<string, ServiceCopy>;
   const services = SERVICES.map((service) => ({ ...service, ...items[service.id] }));
   const [web, ...rest] = services;

   return (
      <main>
         <PageHeader
            breadcrumb={[{ label: tCommon('breadcrumbHome'), href: '/' }, { label: t('breadcrumbLabel') }]}
            eyebrow={t('eyebrow')}
            title={t('title')}
            lede={t('lede')}
         />

         <section className="section-pad" id="web">
            <div className="wrap">
               <Reveal className="card svc feature">
                  <div className="svc-inner">
                     <div>
                        <span className="kicker">{web.kicker}</span>
                        <h2 className="t-2" style={{ margin: '0.6rem 0 1rem' }}>
                           <span className="prompt"></span>
                           {web.title}
                        </h2>
                        <p className="body" style={{ fontSize: '1.05rem' }}>
                           {web.problem}
                        </p>
                        <p className="comment" style={{ marginTop: '1.4rem' }}>
                           {t('howIWorkLabel')}
                        </p>
                        <p className="body" style={{ marginTop: '0.4rem' }}>
                           {web.howIWork}
                        </p>
                     </div>
                     <div>
                        <p className="comment">{t('includesLabel')}</p>
                        <ul className="svc" style={{ marginTop: '1rem' }}>
                           {web.includes?.map((item) => (
                              <li key={item}>{item}</li>
                           ))}
                        </ul>
                        <div style={{ marginTop: '1.6rem' }}>
                           <Tokens tokens={toTokens(web.detailTokens)} />
                        </div>
                     </div>
                  </div>
               </Reveal>
            </div>
         </section>

         {rest.map((service) => (
            <div key={service.id}>
               <hr className="divider" />
               <ServiceDetailBlock service={service} />
            </div>
         ))}

         <CtaBand heading={t('ctaHeading')} lede={t('ctaLede')} source="servicios" />
      </main>
   );
}
