import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import type { Locale } from '@/i18n/routing';

import CaseCard from '@/components/case-card';
import CtaBand from '@/components/cta-band';
import PageHeader from '@/components/page-header';
import Reveal from '@/components/reveal';
import { Link } from '@/i18n/navigation';
import { getCase } from '@/lib/cases';
import { esOnlyCanonical } from '@/lib/seo';
import type { Case } from '@/lib/types';

const RELATED: Case[] = ['optica', 'verifactu', 'cotizadora']
   .map((slug) => getCase(slug, 'es'))
   .filter((item): item is Case => Boolean(item));

interface PageProps {
   params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'sevilla' });

   return {
      title: t('metaTitle'),
      description: t('metaDescription'),
      alternates: esOnlyCanonical('/desarrollador-web-sevilla'),
   };
}

export function generateStaticParams() {
   return [{ locale: 'es' }];
}

export default async function DesarrolladorWebSevillaPage({ params }: PageProps) {
   const { locale } = await params;
   if (locale !== 'es') notFound();
   setRequestLocale(locale as Locale);

   const t = await getTranslations('sevilla');
   const tCommon = await getTranslations('common');
   const tCaseDetail = await getTranslations('caseDetail');
   const forWhomList = t.raw('forWhom.list') as string[];

   return (
      <main>
         <PageHeader
            breadcrumb={[{ label: tCommon('breadcrumbHome'), href: '/' }, { label: t('breadcrumbLabel') }]}
            eyebrow={t('eyebrow')}
            title={t('title')}
            lede={t('lede')}
         />

         <section className="section-pad">
            <Reveal className="wrap">
               <span className="eyebrow">{t('whatIDo.eyebrow')}</span>
               <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                  {t('whatIDo.heading')}
               </h2>
               <p className="body" style={{ maxWidth: '70ch' }}>
                  {t('whatIDo.p1')}
               </p>
               <p className="body" style={{ maxWidth: '70ch', marginTop: '1.2rem' }}>
                  {t('whatIDo.p2')}
               </p>
            </Reveal>
         </section>

         <hr className="divider" />

         <section className="section-pad">
            <Reveal className="wrap">
               <span className="eyebrow">{t('forWhom.eyebrow')}</span>
               <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                  {t('forWhom.heading')}
               </h2>
               <p className="body" style={{ maxWidth: '70ch' }}>
                  {t('forWhom.p1')}
               </p>
               <div className="svc" style={{ marginTop: '1.4rem' }}>
                  <ul>
                     {forWhomList.map((item) => (
                        <li key={item}>{item}</li>
                     ))}
                  </ul>
               </div>
               <p className="body" style={{ maxWidth: '70ch', marginTop: '1.4rem' }}>
                  {t('forWhom.p2')}
               </p>
            </Reveal>
         </section>

         <hr className="divider" />

         <section className="section-pad">
            <Reveal className="wrap">
               <span className="eyebrow">{t('howIWork.eyebrow')}</span>
               <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                  {t('howIWork.heading')}
               </h2>
               <p className="body" style={{ maxWidth: '70ch' }}>
                  {t('howIWork.p1')}
               </p>
               <p className="body" style={{ maxWidth: '70ch', marginTop: '1.2rem' }}>
                  {t('howIWork.p2')}
               </p>
            </Reveal>
         </section>

         <hr className="divider" />

         <section className="section-pad">
            <div className="wrap">
               <Reveal>
                  <span className="eyebrow">{t('cases.eyebrow')}</span>
                  <h2 className="t-2" style={{ margin: '0.6rem 0 1.2rem' }}>
                     {t('cases.heading')}
                  </h2>
                  <p className="body" style={{ maxWidth: '70ch', marginBottom: '2.4rem' }}>
                     {t.rich('cases.intro', {
                        optica: (chunks) => (
                           <Link className="text-link" href={{ pathname: '/casos-de-exito/[slug]', params: { slug: 'optica' } }}>
                              {chunks}
                           </Link>
                        ),
                        verifactu: (chunks) => (
                           <Link className="text-link" href={{ pathname: '/casos-de-exito/[slug]', params: { slug: 'verifactu' } }}>
                              {chunks}
                           </Link>
                        ),
                        cotizadora: (chunks) => (
                           <Link className="text-link" href={{ pathname: '/casos-de-exito/[slug]', params: { slug: 'cotizadora' } }}>
                              {chunks}
                           </Link>
                        ),
                     })}
                  </p>
               </Reveal>
               <Reveal className="cases-grid">
                  {RELATED.map((item) => (
                     <CaseCard key={item.id} item={item} />
                  ))}
               </Reveal>
            </div>
         </section>

         <CtaBand
            heading={t('cta.heading')}
            lede={t('cta.lede')}
            source="geo-sevilla"
            backLink={{ label: tCaseDetail('backLink'), href: '/casos-de-exito' }}
         />
      </main>
   );
}
