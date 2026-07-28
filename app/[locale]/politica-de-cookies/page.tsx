import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';

import CookiePolicyEn from '@/components/cookie-policy-en';
import CookiePolicyEs from '@/components/cookie-policy-es';
import LegalShell from '@/components/legal-shell';
import { alternatesFor } from '@/lib/seo';

interface PageProps {
   params: Promise<{ locale: string }>;
}

type CookiePolicyComponent = () => ReactElement | Promise<ReactElement>;

const CONTENT_BY_LOCALE: Record<Locale, CookiePolicyComponent> = {
   es: CookiePolicyEs,
   en: CookiePolicyEn,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'legal.cookiePolicy' });

   return {
      title: t('metaTitle'),
      robots: { index: false },
      alternates: alternatesFor(locale as Locale, { pathname: '/politica-de-cookies' }),
   };
}

export default async function PoliticaCookiesPage({ params }: PageProps) {
   const { locale } = await params;
   setRequestLocale(locale as Locale);

   const t = await getTranslations('legal.cookiePolicy');
   const Content = CONTENT_BY_LOCALE[locale as Locale];

   return (
      <LegalShell crumb={t('breadcrumbLabel')} title={t('title')}>
         <Content />
      </LegalShell>
   );
}
