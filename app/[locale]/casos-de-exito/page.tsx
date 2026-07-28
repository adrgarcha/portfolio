import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';

import CaseCard from '@/components/case-card';
import CtaBand from '@/components/cta-band';
import PageHeader from '@/components/page-header';
import Reveal from '@/components/reveal';
import { getCases } from '@/lib/cases';
import { alternatesFor } from '@/lib/seo';

interface PageProps {
   params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'casesPage' });

   return {
      title: t('metaTitle'),
      description: t('metaDescription'),
      alternates: alternatesFor(locale as Locale, { pathname: '/casos-de-exito' }),
   };
}

export default async function CasosDeExitoPage({ params }: PageProps) {
   const { locale } = await params;
   setRequestLocale(locale as Locale);

   const t = await getTranslations('casesPage');
   const tCommon = await getTranslations('common');
   const cases = getCases(locale as Locale);

   return (
      <main>
         <PageHeader
            breadcrumb={[{ label: tCommon('breadcrumbHome'), href: '/' }, { label: t('breadcrumbLabel') }]}
            eyebrow={t('eyebrow')}
            title={t('title')}
            lede={t('lede')}
         />

         <section className="section-pad" style={{ paddingTop: 'clamp(24px, 4vw, 48px)' }}>
            <div className="wrap">
               <Reveal className="cases-grid">
                  {cases.map((item) => (
                     <CaseCard key={item.id} item={item} />
                  ))}
               </Reveal>
            </div>
         </section>

         <CtaBand heading={t('ctaHeading')} lede={t('ctaLede')} source="casos-index" />
      </main>
   );
}
