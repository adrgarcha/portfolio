import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';

import LegalNoticeEn from '@/components/legal-notice-en';
import LegalNoticeEs from '@/components/legal-notice-es';
import LegalShell from '@/components/legal-shell';
import { alternatesFor } from '@/lib/seo';

interface PageProps {
   params: Promise<{ locale: string }>;
}

type LegalNoticeComponent = () => ReactElement | Promise<ReactElement>;

const CONTENT_BY_LOCALE: Record<Locale, LegalNoticeComponent> = {
   es: LegalNoticeEs,
   en: LegalNoticeEn,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'legal.legalNotice' });

   return {
      title: t('metaTitle'),
      robots: { index: false },
      alternates: alternatesFor(locale as Locale, { pathname: '/aviso-legal' }),
   };
}

export default async function AvisoLegalPage({ params }: PageProps) {
   const { locale } = await params;
   setRequestLocale(locale as Locale);

   const t = await getTranslations('legal.legalNotice');
   const Content = CONTENT_BY_LOCALE[locale as Locale];

   return (
      <LegalShell crumb={t('breadcrumbLabel')} title={t('title')}>
         <Content />
      </LegalShell>
   );
}
