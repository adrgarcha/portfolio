import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';

import LegalShell from '@/components/legal-shell';
import PrivacyPolicyEn from '@/components/privacy-policy-en';
import PrivacyPolicyEs from '@/components/privacy-policy-es';
import { alternatesFor } from '@/lib/seo';

interface PageProps {
   params: Promise<{ locale: string }>;
}

type PrivacyPolicyComponent = () => ReactElement | Promise<ReactElement>;

const CONTENT_BY_LOCALE: Record<Locale, PrivacyPolicyComponent> = {
   es: PrivacyPolicyEs,
   en: PrivacyPolicyEn,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale: locale as Locale, namespace: 'legal.privacyPolicy' });

   return {
      title: t('metaTitle'),
      robots: { index: false },
      alternates: alternatesFor(locale as Locale, { pathname: '/politica-de-privacidad' }),
   };
}

export default async function PoliticaPrivacidadPage({ params }: PageProps) {
   const { locale } = await params;
   setRequestLocale(locale as Locale);

   const t = await getTranslations('legal.privacyPolicy');
   const Content = CONTENT_BY_LOCALE[locale as Locale];

   return (
      <LegalShell crumb={t('breadcrumbLabel')} title={t('title')}>
         <Content />
      </LegalShell>
   );
}
