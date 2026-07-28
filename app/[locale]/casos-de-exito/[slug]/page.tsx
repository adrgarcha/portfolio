import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import CtaBand from '@/components/cta-band';
import Breadcrumb from '@/components/breadcrumb';
import JsonLd, { caseArticleSchema } from '@/components/json-ld';
import Tokens from '@/components/tokens';
import { routing, type Locale } from '@/i18n/routing';
import { alternatesFor } from '@/lib/seo';
import { CASE_STRUCTURE, getCase } from '@/lib/cases';

interface PageProps {
   params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
   return routing.locales.flatMap((locale) => CASE_STRUCTURE.map((c) => ({ locale, slug: c.slug[locale as Locale] })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale, slug } = await params;
   setRequestLocale(locale as Locale);
   const item = getCase(slug, locale as Locale);
   if (!item) return {};
   return {
      title: item.metaTitle || item.shortTitle,
      description: item.metaDescription || item.result,
      alternates: alternatesFor(locale as Locale, {
         pathname: '/casos-de-exito/[slug]',
         params: (targetLocale) => ({ slug: item.slug[targetLocale] }),
      }),
   };
}

export default async function CaseDetailPage({ params }: PageProps) {
   const { locale, slug } = await params;
   setRequestLocale(locale as Locale);
   const item = getCase(slug, locale as Locale);
   if (!item) notFound();

   const t = await getTranslations('caseDetail');
   const tCommon = await getTranslations('common');
   const tCases = await getTranslations('casesPage');

   return (
      <main>
         <JsonLd data={caseArticleSchema(item, locale as Locale)} />
         <section className="page-head detail-hero">
            <div className="wrap">
               <Breadcrumb
                  items={[
                     { label: tCommon('breadcrumbHome'), href: '/' },
                     { label: tCases('breadcrumbLabel'), href: '/casos-de-exito' },
                     { label: item.shortTitle },
                  ]}
               />
               <span className="eyebrow">{t('eyebrow')}</span>
               <h1 className="t-1" style={{ marginTop: '0.6rem', maxWidth: '22ch' }}>
                  {item.title}
               </h1>
               <div className="token-row" style={{ marginTop: '1.4rem' }}>
                  <Tokens tokens={item.tokens} />
               </div>
               <div className="thumb-lg" style={{ position: 'relative' }}>
                  {item.img ? (
                     <Image src={item.img} alt={item.shortTitle} fill sizes="(max-width: 1120px) 100vw, 1120px" style={{ objectFit: 'cover' }} />
                  ) : (
                     <div className="ph">{item.thumb}</div>
                  )}
               </div>
            </div>
         </section>

         <section style={{ paddingBottom: 'clamp(48px, 6vw, 90px)' }}>
            <div className="wrap">
               <div className="detail-block">
                  <span className="label">{t('context')}</span>
                  <div>
                     {item.context.map((p) => (
                        <p key={p}>{p}</p>
                     ))}
                  </div>
               </div>
               <div className="detail-block">
                  <span className="label">{t('challenge')}</span>
                  <div>
                     {item.challenge.map((p) => (
                        <p key={p}>{p}</p>
                     ))}
                  </div>
               </div>
               <div className="detail-block">
                  <span className="label">{t('solution')}</span>
                  <div>
                     {item.solution.map((p) => (
                        <p key={p}>{p}</p>
                     ))}
                  </div>
               </div>
               <div className="detail-block">
                  <span className="label">{t('outcome')}</span>
                  <div>
                     <p className="metric-big">{item.outcome.metric}</p>
                     <p style={{ marginTop: '1rem' }}>{item.outcome.text}</p>
                  </div>
               </div>
            </div>
         </section>

         <CtaBand
            heading={t('ctaHeading')}
            lede={t('ctaLede')}
            source={`caso-${item.id}`}
            backLink={{ label: t('backLink'), href: '/casos-de-exito' }}
         />
      </main>
   );
}
