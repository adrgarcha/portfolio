import type { Locale } from '@/i18n/routing';

import type { Case, CaseCopy, CaseStructure } from './types';
import { CASE_COPY_EN } from './cases-en';
import { CASE_COPY_ES } from './cases-es';

export const CASE_STRUCTURE: CaseStructure[] = [
   {
      id: 'plataforma-incidencias',
      slug: { es: 'plataforma-incidencias', en: 'client-request-platform' },
      img: '/case-studies/plataforma-gimbal.webp',
      featured: true,
   },
   {
      id: 'cotizadora',
      slug: { es: 'cotizadora', en: 'custom-quoting-tool' },
      img: '/case-studies/cotizadora.webp',
   },
   {
      id: 'verifactu',
      slug: { es: 'verifactu', en: 'verifactu-invoicing-software' },
      img: '/case-studies/verifactu.webp',
   },
   {
      id: 'optica',
      slug: { es: 'optica', en: 'optical-store-management-software' },
      img: '/case-studies/entregafas.webp',
   },
   {
      id: 'golgorio',
      slug: { es: 'golgorio', en: 'golgorio-sports-app' },
      img: '/case-studies/app-golgorio.webp',
   },
   {
      id: 'emails-ecommerce',
      slug: { es: 'emails-ecommerce', en: 'multi-store-ecommerce-inbox' },
      img: '/case-studies/app-emails.webp',
   },
];

const CASE_COPY: Record<Locale, Record<string, CaseCopy>> = {
   es: CASE_COPY_ES,
   en: CASE_COPY_EN,
};

export function getCases(locale: Locale): Case[] {
   return CASE_STRUCTURE.map((structure) => ({
      ...structure,
      ...CASE_COPY[locale][structure.id],
   }));
}

export function getHomeCases(locale: Locale): Case[] {
   return getCases(locale).filter((c) => c.id !== 'emails-ecommerce');
}

export function getCase(slug: string, locale: Locale): Case | undefined {
   return getCases(locale).find((c) => c.slug[locale] === slug);
}
