import { getPathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { CASE_STRUCTURE } from '@/lib/cases';

const NO_TARGET_LOCALE_ROUTES: Partial<Record<string, Locale>> = {
   '/desarrollador-web-sevilla': 'en',
};

export function resolveLocaleHref(pathname: string, targetLocale: Locale, currentLocale: Locale, slugParam?: string): string {
   if (NO_TARGET_LOCALE_ROUTES[pathname] === targetLocale) {
      return getPathname({ href: '/', locale: targetLocale });
   }

   if (slugParam) {
      const item = CASE_STRUCTURE.find((c) => c.slug[currentLocale] === slugParam);
      const targetSlug = item ? item.slug[targetLocale] : slugParam;
      return getPathname({ href: { pathname: '/casos-de-exito/[slug]', params: { slug: targetSlug } }, locale: targetLocale });
   }

   return getPathname({ href: pathname, locale: targetLocale } as Parameters<typeof getPathname>[0]);
}
