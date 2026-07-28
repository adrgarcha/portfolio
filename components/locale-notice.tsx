'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import NextLink from 'next/link';

import { usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { resolveLocaleHref } from '@/lib/locale-href';

const DISMISSED_KEY = 'locale-notice-dismissed';

export default function LocaleNotice() {
   const t = useTranslations('localeNotice');
   const locale = useLocale() as Locale;
   const pathname = usePathname();
   const params = useParams<{ slug?: string }>();
   const [visible, setVisible] = useState(false);

   // useEffect required: navigator.language/localStorage are client-only APIs unavailable during SSR;
   // this must run only after mount to avoid a hydration mismatch.
   useEffect(() => {
      if (locale !== 'es') return;
      if (window.localStorage.getItem(DISMISSED_KEY)) return;
      const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
      const isEnglishBrowser = languages.some((lang) => /^en(-|$)/i.test(lang));
      if (isEnglishBrowser) setVisible(true);
   }, [locale]);

   if (locale !== 'es' || !visible) return null;

   const href = resolveLocaleHref(pathname, 'en', 'es', params.slug);

   const dismiss = () => {
      window.localStorage.setItem(DISMISSED_KEY, '1');
      setVisible(false);
   };

   return (
      <div className="locale-notice" role="status">
         <div className="wrap locale-notice-inner">
            <p>
               {t.rich('body', {
                  link: (chunks) => (
                     <NextLink href={href} className="locale-notice-link">
                        {chunks}
                     </NextLink>
                  ),
               })}
            </p>
            <button type="button" className="locale-notice-close" onClick={dismiss} aria-label={t('dismiss')}>
               ✕
            </button>
         </div>
      </div>
   );
}
