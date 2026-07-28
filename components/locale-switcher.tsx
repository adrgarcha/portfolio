'use client';

import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import NextLink from 'next/link';

import { usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { resolveLocaleHref } from '@/lib/locale-href';

const LOCALES: Locale[] = ['es', 'en'];

export default function LocaleSwitcher() {
   const t = useTranslations('nav');
   const pathname = usePathname();
   const currentLocale = useLocale() as Locale;
   const params = useParams<{ slug?: string }>();

   return (
      <div className="locale-switch" aria-label={t('languageSwitcherLabel')}>
         {LOCALES.map((locale, index) => (
            <span key={locale} className="locale-switch-item">
               {index > 0 && <span className="locale-switch-sep">/</span>}
               {locale === currentLocale ? (
                  <span className="locale-current" aria-current="true">
                     {locale.toUpperCase()}
                  </span>
               ) : (
                  <NextLink
                     href={resolveLocaleHref(pathname, locale, currentLocale, params.slug)}
                     className="locale-link"
                     aria-label={t('switchLanguage')}
                  >
                     {locale.toUpperCase()}
                  </NextLink>
               )}
            </span>
         ))}
      </div>
   );
}
