import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';

import Booker from '@/components/booker/booker';
import Breadcrumb from '@/components/breadcrumb';
import { alternatesFor } from '@/lib/seo';

interface PageProps {
   params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'booking.page' });

   return {
      title: t('metaTitle'),
      description: t('metaDescription'),
      alternates: alternatesFor(locale as Locale, { pathname: '/agenda' }),
   };
}

export default async function AgendaPage({ params }: PageProps) {
   const { locale } = await params;
   setRequestLocale(locale as Locale);

   const t = await getTranslations('booking.page');
   const tCommon = await getTranslations('common');

   return (
      <main>
         <section style={{ paddingTop: 'clamp(40px, 6vw, 72px)', paddingBottom: 'clamp(56px, 8vw, 110px)' }}>
            <div className="wrap">
               <Breadcrumb items={[{ label: tCommon('breadcrumbHome'), href: '/' }, { label: t('breadcrumbLabel') }]} />
               <div style={{ textAlign: 'center', maxWidth: '64ch', margin: '0 auto clamp(36px, 5vw, 56px)' }}>
                  <span className="eyebrow" style={{ justifyContent: 'center' }}>
                     {t('eyebrow')}
                  </span>
                  <h1 className="t-1" style={{ marginTop: '0.6rem' }}>
                     {t('heading')}
                  </h1>
                  <p className="lede" style={{ marginInline: 'auto', marginTop: '1.2rem' }}>
                     {t.rich('lede', {
                        strong: (chunks) => <strong style={{ color: 'var(--text)' }}>{chunks}</strong>,
                     })}
                  </p>
               </div>

               <div style={{ maxWidth: '920px', marginInline: 'auto' }}>
                  <Booker />
               </div>

               <p className="comment" style={{ textAlign: 'center', marginTop: '2rem', maxWidth: '60ch', marginInline: 'auto' }}>
                  {t('footnote')}
               </p>
            </div>
         </section>
      </main>
   );
}
